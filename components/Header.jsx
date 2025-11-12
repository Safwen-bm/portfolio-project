import Link from "next/link";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="fixed top-6 left-0 right-0 z-50 pointer-events-auto">
      <div className="container mx-auto px-4">
        <div
          className="relative mx-auto max-w-[1200px] flex items-center justify-between px-6 py-3 rounded-2xl"
          style={{
            background: "rgba(6,10,14,0.58)",
            border: "1px solid rgba(70,140,255,0.10)",
            boxShadow: "0 10px 40px rgba(30,90,180,0.10)",
            backdropFilter: "blur(8px)",
          }}
        >
          {/* left: logo */}
          <Link
            href="/"
            className="flex items-center gap-3 hover:opacity-95 transition"
          >
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background:
                  "linear-gradient(135deg, rgba(14,24,38,0.95), rgba(8,14,24,0.6))",
                border: "1px solid rgba(100,170,255,0.08)",
              }}
            >
              <span className="text-sm font-bold text-white/90">{`</>`}</span>
            </div>
            <div className="hidden md:block">
              <h1 className="text-lg font-semibold text-white tracking-tight">
                SafOne <span style={{ color: "#7fbfff" }}>{`<`}</span>
              </h1>
            </div>
          </Link>

          {/* center nav */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden xl:block">
            <Nav centered />
          </div>

          {/* right CTA + mobile */}
          <div className="flex items-center gap-4">
            <div className="hidden xl:block">
              <Link href="/contact" className="inline-block">
                <Button
                  className="rounded-full px-5 py-2 font-semibold text-sm"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(110,185,255,1), rgba(58,120,255,0.95))",
                    color: "#021428",
                    boxShadow: "0 8px 30px rgba(60,120,255,0.28)",
                  }}
                >
                  Get Started
                </Button>
              </Link>
            </div>

            <div className="xl:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
