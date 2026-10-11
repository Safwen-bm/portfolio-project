// components/resume/PyramidScene.jsx
// Background of the WHOLE Resume section (replaces the old KnowledgeNetworkBg):
//  - a Three.js scene: glowing wireframe pyramid, inner pyramid, orbit rings, particles.
//    It stays on screen (sticky) while you scroll through the section.
//  - floating code words / tags that drift and shift a little with the mouse.
// Colors follow the theme and the light / dark mode. The parent must be `relative isolate overflow-clip`.
"use client";

import { useEffect, useRef } from "react";
import {
  BufferAttribute,
  BufferGeometry,
  CanvasTexture,
  Color,
  ConeGeometry,
  Group,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Points,
  PointsMaterial,
  Scene,
  SRGBColorSpace,
  TorusGeometry,
  WebGLRenderer,
} from "three";

// ---------- floating tags ----------
// depth = how far the tag slides with the mouse (px). `desktop` tags are hidden on small screens.
const tags = [
  { text: "</>", left: "5%", top: "5%", size: "text-5xl md:text-7xl", tone: "text-accent/[0.2]", dur: 7, delay: 0, depth: 26 },
  { text: "{ API }", left: "86%", top: "20%", size: "text-2xl md:text-4xl", tone: "text-glow/[0.3]", dur: 9, delay: 0.5, depth: 30 },
  { text: "git push", left: "34%", top: "3%", size: "text-lg md:text-2xl", tone: "text-glow/[0.3]", dur: 7.5, delay: 2, depth: 14 },
  { text: "machine learning", left: "52%", top: "9%", size: "text-sm md:text-xl", tone: "text-saffron/[0.3]", dur: 9, delay: 0.8, depth: 20, desktop: true },
  { text: "REST API", left: "8%", top: "17%", size: "text-xl md:text-3xl", tone: "text-accent/[0.18]", dur: 8.5, delay: 1.2, depth: 24 },
  { text: "npm run build", left: "3%", top: "30%", size: "text-sm md:text-lg", tone: "text-glow/[0.3]", dur: 9.5, delay: 1.7, depth: 16 },
  { text: "useEffect()", left: "74%", top: "46%", size: "text-base md:text-2xl", tone: "text-accent/[0.2]", dur: 10, delay: 0.3, depth: 18, desktop: true },
  { text: "↔", left: "56%", top: "40%", size: "text-4xl md:text-5xl", tone: "text-saffron/[0.22]", dur: 8, delay: 0.9, depth: 22, desktop: true },
  { text: "docker compose up", left: "20%", top: "55%", size: "text-sm md:text-lg", tone: "text-glow/[0.28]", dur: 10, delay: 2.2, depth: 14, desktop: true },
  { text: "JWT", left: "88%", top: "58%", size: "text-2xl md:text-4xl", tone: "text-accent/[0.2]", dur: 8, delay: 1.1, depth: 26 },
  { text: "embeddings", left: "76%", top: "6%", size: "text-sm md:text-xl", tone: "text-accent/[0.2]", dur: 9, delay: 0.4, depth: 22, desktop: true },
  { text: "prompt()", left: "13%", top: "44%", size: "text-lg md:text-3xl", tone: "text-saffron/[0.26]", dur: 8, delay: 1.5, depth: 26 },
  { text: "SQL", left: "6%", top: "64%", size: "text-3xl md:text-5xl", tone: "text-accent/[0.18]", dur: 10, delay: 0.8, depth: 20 },
  { text: "SELECT *", left: "62%", top: "66%", size: "text-sm md:text-xl", tone: "text-glow/[0.28]", dur: 9, delay: 1.9, depth: 16, desktop: true },
  { text: "const {}", left: "12%", top: "78%", size: "text-2xl md:text-3xl", tone: "text-accent/[0.18]", dur: 9, delay: 1.2, depth: 18 },
  { text: "WebRTC", left: "78%", top: "80%", size: "text-xl md:text-3xl", tone: "text-glow/[0.3]", dur: 8.5, delay: 0.7, depth: 24 },
  { text: "☁", left: "93%", top: "12%", size: "text-3xl md:text-5xl", tone: "text-glow/[0.28]", dur: 8.5, delay: 0.7, depth: 20 },
  { text: "async ()", left: "30%", top: "88%", size: "text-lg md:text-2xl", tone: "text-accent/[0.2]", dur: 10, delay: 1.4, depth: 14 },
  { text: "CI/CD", left: "58%", top: "90%", size: "text-2xl md:text-4xl", tone: "text-saffron/[0.24]", dur: 8, delay: 0.2, depth: 28 },
  { text: "RBAC", left: "3%", top: "92%", size: "text-xl md:text-3xl", tone: "text-glow/[0.28]", dur: 8.5, delay: 2.1, depth: 18, desktop: true },
  { text: "pgvector", left: "46%", top: "25%", size: "text-sm md:text-lg", tone: "text-accent/[0.18]", dur: 9, delay: 1.3, depth: 12, desktop: true },
  { text: "Socket.IO", left: "22%", top: "30%", size: "text-sm md:text-xl", tone: "text-saffron/[0.24]", dur: 10, delay: 0.5, depth: 20, desktop: true },
];

// ---------- three.js helpers ----------
const readColor = (name, fallback) => {
  const raw = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  const parts = raw.split(/\s+/).map(Number);
  if (parts.length === 3 && parts.every((n) => !Number.isNaN(n))) {
    return new Color().setRGB(parts[0] / 255, parts[1] / 255, parts[2] / 255, SRGBColorSpace);
  }
  return new Color(fallback);
};

const isDarkMode = () => document.documentElement.getAttribute("data-mode") === "dark";

export default function PyramidScene() {
  const rootRef = useRef(null);
  const canvasHostRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    const host = canvasHostRef.current;
    if (!root || !host) return;

    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // mouse -> CSS variables (floating tags) + numbers (3D scene)
    let mx = 0;
    let my = 0;
    let moveFrame = 0;
    const onMove = (e) => {
      mx = (e.clientX / window.innerWidth - 0.5) * 2;
      my = (e.clientY / window.innerHeight - 0.5) * 2;
      cancelAnimationFrame(moveFrame);
      moveFrame = requestAnimationFrame(() => {
        root.style.setProperty("--mx", mx.toFixed(3));
        root.style.setProperty("--my", my.toFixed(3));
      });
    };
    if (!isMobile) window.addEventListener("pointermove", onMove, { passive: true });

    // ----- 3D scene (skipped silently when WebGL is not available: the tags still show) -----
    // Sharpness: render at the screen's real resolution (phones are 2x - 3x), capped at 2x.
    // Very weak devices (2 cores or less) start at 1.5x, and any device that turns out to be slow
    // (measured on the first frames) drops to 1.25x automatically.
    const lowEnd = (navigator.hardwareConcurrency || 8) <= 2;
    const pixelRatio = Math.min(window.devicePixelRatio || 1, lowEnd ? 1.5 : 2);
    // thin lines look fainter on dense screens, so they get a little more opacity there
    const boost = pixelRatio >= 2 ? 1.3 : 1;

    let renderer;
    try {
      renderer = new WebGLRenderer({ alpha: true, antialias: pixelRatio < 2 });
    } catch {
      return () => {
        window.removeEventListener("pointermove", onMove);
        cancelAnimationFrame(moveFrame);
      };
    }

    const scene = new Scene();
    const camera = new PerspectiveCamera(40, 1, 0.1, 100);
    renderer.setPixelRatio(pixelRatio);
    host.appendChild(renderer.domElement);

    // keeps the whole pyramid (and on wide screens the rings) inside the screen
    const fitCamera = () => {
      const w = host.clientWidth;
      const h = host.clientHeight;
      if (!w || !h) return false;
      const aspect = w / h;
      const tan = Math.tan((camera.fov * Math.PI) / 360);
      const needW = isMobile ? 5.6 : 8.6;
      const needH = 6.4;
      const z = Math.max(needH / (2 * tan), needW / (2 * tan * aspect));
      camera.aspect = aspect;
      camera.position.set(0, 0.2, z);
      camera.lookAt(0, 0, 0);
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      return true;
    };
    fitCamera();

    let dark = isDarkMode();
    let glow = readColor("--c-glow", "#7c93ff");
    let accent = readColor("--c-accent", "#2447d6");
    let hot = readColor("--c-saffron", "#f4b63f");
    const level = () => (dark ? 1 : 1.55); // stronger lines on a light page
    const op = (base) => Math.min(1, base * level() * boost);

    const group = new Group();
    scene.add(group);

    const outerGeo = new ConeGeometry(2.5, 4.2, 4, 5, true);
    const outerMat = new MeshBasicMaterial({
      color: glow,
      wireframe: true,
      transparent: true,
      opacity: op(0.3),
      depthWrite: false,
    });
    const outer = new Mesh(outerGeo, outerMat);
    outer.rotation.y = Math.PI / 4;
    group.add(outer);

    const innerGeo = new ConeGeometry(1.35, 2.3, 4, 3, true);
    const innerMat = new MeshBasicMaterial({
      color: hot,
      wireframe: true,
      transparent: true,
      opacity: op(0.5),
      depthWrite: false,
    });
    const inner = new Mesh(innerGeo, innerMat);
    inner.position.y = -0.55;
    group.add(inner);

    const ringGeo = new TorusGeometry(3.1, 0.014, 6, 120);
    const ringMat = new MeshBasicMaterial({ color: accent, transparent: true, opacity: op(0.55) });
    const ring = new Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2.15;
    ring.position.y = -2.05;
    group.add(ring);

    const ring2Geo = new TorusGeometry(3.7, 0.01, 6, 120);
    const ring2Mat = new MeshBasicMaterial({ color: hot, transparent: true, opacity: op(0.35) });
    const ring2 = new Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = Math.PI / 2.15;
    ring2.rotation.y = 0.3;
    ring2.position.y = -2.05;
    group.add(ring2);

    // particles: a dense cloud around the pyramid + a wide, sparse one that fills the screen
    const dense = isMobile ? 300 : 800;
    const wide = isMobile ? 160 : 450;
    const count = dense + wide;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const mixes = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      if (i < dense) {
        const y = (Math.random() - 0.5) * 6;
        const spread = 1.2 + (2.1 - y) * 0.7;
        const a = Math.random() * Math.PI * 2;
        const r = Math.sqrt(Math.random()) * spread + 0.4;
        positions[i * 3] = Math.cos(a) * r;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = Math.sin(a) * r;
      } else {
        positions[i * 3] = (Math.random() - 0.5) * 18;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 11;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 6;
      }
      mixes[i] = Math.random() > 0.7 ? 0.9 : 0.1;
    }
    const colorAttr = new BufferAttribute(colors, 3);
    const paint = () => {
      const tmp = new Color();
      for (let i = 0; i < count; i++) {
        tmp.copy(glow).lerp(hot, mixes[i]);
        colors[i * 3] = tmp.r;
        colors[i * 3 + 1] = tmp.g;
        colors[i * 3 + 2] = tmp.b;
      }
      colorAttr.needsUpdate = true;
    };
    paint();

    const pGeo = new BufferGeometry();
    pGeo.setAttribute("position", new BufferAttribute(positions, 3));
    pGeo.setAttribute("color", colorAttr);

    // round, soft-edged dots instead of squares
    const dot = document.createElement("canvas");
    dot.width = dot.height = 64;
    const dctx = dot.getContext("2d");
    const grad = dctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    grad.addColorStop(0, "rgba(255,255,255,1)");
    grad.addColorStop(0.45, "rgba(255,255,255,0.85)");
    grad.addColorStop(1, "rgba(255,255,255,0)");
    dctx.fillStyle = grad;
    dctx.fillRect(0, 0, 64, 64);
    const dotTexture = new CanvasTexture(dot);

    const pMat = new PointsMaterial({
      map: dotTexture,
      size: 0.1 * (pixelRatio >= 2 ? 1.15 : 1),
      vertexColors: true,
      transparent: true,
      opacity: dark ? 0.8 : 0.95,
      depthWrite: false,
      sizeAttenuation: true,
    });
    const particles = new Points(pGeo, pMat);
    scene.add(particles);

    const t0 = performance.now();
    let spin = 0;
    const renderFrame = () => {
      const t = (performance.now() - t0) / 1000;
      spin += 0.0035;
      group.rotation.y += (spin + mx * 0.5 - group.rotation.y) * 0.06;
      group.rotation.x += (my * 0.18 - group.rotation.x) * 0.06;
      inner.rotation.y = -t * 0.5;
      ring.rotation.z = t * 0.25;
      ring2.rotation.z = -t * 0.18;
      particles.rotation.y = t * 0.03;
      particles.position.y = Math.sin(t * 0.6) * 0.08;
      renderer.render(scene, camera);
    };

    let rafId = 0;
    let running = false;
    let inView = true;
    let frameCount = 0;
    let frameStart = 0;
    let adapted = false;
    const loop = () => {
      if (!running) return;
      rafId = requestAnimationFrame(loop);
      renderFrame();

      // quality guard: if the first 90 frames are slow (< ~30 fps), lower the resolution once
      if (!adapted) {
        if (frameCount === 0) frameStart = performance.now();
        frameCount++;
        if (frameCount === 90) {
          adapted = true;
          const average = (performance.now() - frameStart) / 90;
          if (average > 32 && pixelRatio > 1.25) {
            renderer.setPixelRatio(1.25);
            fitCamera();
          }
        }
      }
    };
    const start = () => {
      if (running || reduceMotion) return;
      running = true;
      rafId = requestAnimationFrame(loop);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(rafId);
    };
    const sync = () => (inView && !document.hidden ? start() : stop());

    // the canvas is sticky, so it only "intersects" while you are inside the Resume section
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      sync();
    });
    observer.observe(host);
    document.addEventListener("visibilitychange", sync);
    if (reduceMotion) renderFrame();

    const resizeObserver = new ResizeObserver(() => {
      if (fitCamera() && reduceMotion) renderFrame();
    });
    resizeObserver.observe(host);

    const onTheme = () => {
      dark = isDarkMode();
      glow = readColor("--c-glow", "#7c93ff");
      accent = readColor("--c-accent", "#2447d6");
      hot = readColor("--c-saffron", "#f4b63f");
      outerMat.color.copy(glow);
      outerMat.opacity = op(0.3);
      innerMat.color.copy(hot);
      innerMat.opacity = op(0.5);
      ringMat.color.copy(accent);
      ringMat.opacity = op(0.55);
      ring2Mat.color.copy(hot);
      ring2Mat.opacity = op(0.35);
      pMat.opacity = dark ? 0.8 : 0.95;
      paint();
      if (reduceMotion) renderFrame();
    };
    window.addEventListener("themechange", onTheme);

    return () => {
      stop();
      cancelAnimationFrame(moveFrame);
      observer.disconnect();
      resizeObserver.disconnect();
      document.removeEventListener("visibilitychange", sync);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("themechange", onTheme);

      [outerGeo, innerGeo, ringGeo, ring2Geo, pGeo].forEach((g) => g.dispose());
      [outerMat, innerMat, ringMat, ring2Mat, pMat].forEach((m) => m.dispose());
      dotTexture.dispose();
      renderer.dispose();
      if (host.contains(renderer.domElement)) host.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-clip"
    >
      {/* the 3D scene stays on screen while you scroll through the section */}
      <div className="absolute inset-0">
        <div ref={canvasHostRef} className="sticky top-0 h-svh w-full" />
      </div>

      {/* floating words and tags */}
      {tags.map((tag) => (
        <span
          key={tag.text}
          className={`absolute ${tag.desktop ? "hidden md:block" : ""}`}
          style={{
            left: tag.left,
            top: tag.top,
            transform: `translate(calc(var(--mx, 0) * ${tag.depth}px), calc(var(--my, 0) * ${tag.depth}px))`,
            transition: "transform 0.5s ease-out",
          }}
        >
          <span
            className={`block animate-drift select-none whitespace-nowrap font-mono font-bold ${tag.size} ${tag.tone}`}
            style={{ animationDuration: `${tag.dur}s`, animationDelay: `${tag.delay}s` }}
          >
            {tag.text}
          </span>
        </span>
      ))}
    </div>
  );
}