// app/api/contact/route.js
import nodemailer from "nodemailer";

// nodemailer needs the Node.js runtime (not Edge)
export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const LIMITS = { name: 80, email: 120, message: 5000 };

// Light anti-spam: max 5 messages per IP every 10 minutes.
// (In-memory, so on serverless hosting it is per instance: it slows spam down, it is not a hard wall.)
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map();

const isRateLimited = (ip) => {
  const now = Date.now();
  for (const [key, times] of hits) {
    const fresh = times.filter((t) => now - t < WINDOW_MS);
    if (fresh.length) hits.set(key, fresh);
    else hits.delete(key);
  }
  const recent = hits.get(ip) ?? [];
  if (recent.length >= MAX_PER_WINDOW) return true;
  hits.set(ip, [...recent, now]);
  return false;
};

// no line breaks allowed in anything that ends up in an email header
const oneLine = (value) => String(value).replace(/[\r\n]+/g, " ").trim();

export async function POST(req) {
  try {
    let body;
    try {
      body = await req.json();
    } catch {
      return Response.json({ error: "Invalid request" }, { status: 400 });
    }

    const { firstName, lastName = "", email, message, website = "" } = body ?? {};

    // hidden "website" field: humans never fill it, bots do. Pretend it worked.
    if (website) return Response.json({ success: true }, { status: 200 });

    if (![firstName, lastName, email, message].every((v) => typeof v === "string")) {
      return Response.json({ error: "Invalid request" }, { status: 400 });
    }

    const first = oneLine(firstName);
    const last = oneLine(lastName);
    const mail = oneLine(email);
    const text = message.trim();

    if (!first || !mail || !text) {
      return Response.json({ error: "Missing fields" }, { status: 400 });
    }

    if (!EMAIL_RE.test(mail)) {
      return Response.json({ error: "Invalid email" }, { status: 400 });
    }

    if (
      first.length > LIMITS.name ||
      last.length > LIMITS.name ||
      mail.length > LIMITS.email ||
      text.length > LIMITS.message
    ) {
      return Response.json({ error: "Message too long" }, { status: 400 });
    }

    const ip = (req.headers.get("x-forwarded-for") ?? "unknown").split(",")[0].trim();
    if (isRateLimited(ip)) {
      return Response.json(
        { error: "Too many messages, please try again later." },
        { status: 429 }
      );
    }

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("Contact form: EMAIL_USER / EMAIL_PASS are not set");
      return Response.json({ error: "Server error" }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const fullName = `${first} ${last}`.trim();

    await transporter.sendMail({
      from: `"Portfolio" <${process.env.EMAIL_USER}>`,
      replyTo: mail,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Contact — ${fullName}`,
      text: `Name: ${fullName}\nEmail: ${mail}\n\nMessage:\n${text}`,
    });

    return Response.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact form error:", error);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}
