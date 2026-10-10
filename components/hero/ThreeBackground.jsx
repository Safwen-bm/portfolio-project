// components/hero/ThreeBackground.jsx
"use client";

import { useEffect, useRef } from "react";
import {
  BufferAttribute,
  BufferGeometry,
  Color,
  IcosahedronGeometry,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  PlaneGeometry,
  Points,
  PointsMaterial,
  Scene,
  SRGBColorSpace,
  WebGLRenderer,
} from "three";

// reads "--c-glow" etc. ("124 147 255") from the active theme
const readColor = (name, fallback) => {
  const raw = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  const parts = raw.split(/\s+/).map(Number);
  if (parts.length === 3 && parts.every((n) => !Number.isNaN(n))) {
    return new Color().setRGB(parts[0] / 255, parts[1] / 255, parts[2] / 255, SRGBColorSpace);
  }
  return new Color(fallback);
};

export default function ThreeBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // 1. Scene, camera, renderer (if WebGL is unavailable the page simply keeps its gradient)
    let renderer;
    try {
      renderer = new WebGLRenderer({ alpha: true, antialias: !isMobile, powerPreference: "high-performance" });
    } catch {
      return;
    }

    const scene = new Scene();
    const camera = new PerspectiveCamera(
      60,
      container.clientWidth / Math.max(container.clientHeight, 1),
      0.1,
      1000
    );
    camera.position.set(0, 2, 18);

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1 : 1.5));
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    let glow = readColor("--c-glow", "#7c93ff");
    let hot = readColor("--c-saffron", "#f4b63f");
    const white = new Color("#ffffff");

    // 2. Animated wireframe terrain
    const planeGeometry = new PlaneGeometry(80, 50, isMobile ? 40 : 80, isMobile ? 25 : 50);
    const planeMaterial = new MeshBasicMaterial({
      color: glow,
      wireframe: true,
      transparent: true,
      opacity: 0.26,
      depthWrite: false,
    });
    const plane = new Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = -Math.PI / 2.3;
    plane.position.y = -6;
    scene.add(plane);

    // 3. Particle stream
    const particleCount = isMobile ? 1800 : 4500;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const mixes = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      const t = Math.random();
      positions[i * 3] = (t - 0.5) * 60;
      positions[i * 3 + 1] = Math.sin(t * Math.PI * 4) * 4 + (Math.random() - 0.5) * 3;
      positions[i * 3 + 2] = Math.cos(t * Math.PI * 3) * 8 + (Math.random() - 0.5) * 5;
      mixes[i] = Math.random() > 0.65 ? 0.9 : 0.1;
    }

    const colorAttribute = new BufferAttribute(colors, 3);

    const paintParticles = () => {
      const tmp = new Color();
      for (let i = 0; i < particleCount; i++) {
        tmp.copy(glow).lerp(hot, mixes[i]);
        colors[i * 3] = tmp.r;
        colors[i * 3 + 1] = tmp.g;
        colors[i * 3 + 2] = tmp.b;
      }
      colorAttribute.needsUpdate = true;
    };
    paintParticles();

    const particleGeometry = new BufferGeometry();
    particleGeometry.setAttribute("position", new BufferAttribute(positions, 3));
    particleGeometry.setAttribute("color", colorAttribute);

    const particleMaterial = new PointsMaterial({
      size: 0.12,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      depthWrite: false,
      sizeAttenuation: true,
    });
    const particles = new Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // 4. Floating geometric nodes
    const nodes = [];
    const nodeBaseY = [];
    const nodeGeometry = new IcosahedronGeometry(0.7, 1);
    const nodeMaterial = new MeshBasicMaterial({
      color: glow.clone().lerp(white, 0.35),
      wireframe: true,
      transparent: true,
      opacity: 0.8,
    });

    for (let i = 0; i < 7; i++) {
      const node = new Mesh(nodeGeometry, nodeMaterial);
      const baseY = Math.sin(i) * 3;
      node.position.set((i - 3) * 7, baseY, (Math.random() - 0.5) * 10);
      nodes.push(node);
      nodeBaseY.push(baseY);
      scene.add(node);
    }

    // 5. Mouse parallax (desktop only)
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (event.clientY / window.innerHeight - 0.5) * 2;
    };
    if (!isMobile) window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // 6. Render (plain performance.now clock: THREE.Clock is deprecated in recent three versions)
    const startTime = performance.now();
    const positionAttribute = planeGeometry.attributes.position;

    const renderFrame = () => {
      const elapsed = (performance.now() - startTime) / 1000;

      for (let i = 0; i < positionAttribute.count; i++) {
        const x = positionAttribute.getX(i);
        const y = positionAttribute.getY(i);
        positionAttribute.setZ(
          i,
          Math.sin(x * 0.2 + elapsed * 1.2) * Math.cos(y * 0.2 + elapsed * 1.2) * 1.8
        );
      }
      positionAttribute.needsUpdate = true;

      particles.rotation.y = elapsed * 0.04;

      nodes.forEach((node, index) => {
        node.rotation.x += 0.01;
        node.rotation.y += 0.015;
        node.position.y = nodeBaseY[index] + Math.sin(elapsed * 1.5 + index) * 0.5;
      });

      camera.position.x += (mouseX * 2.5 - camera.position.x) * 0.05;
      camera.position.y += (-mouseY * 2 + 2 - camera.position.y) * 0.05;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    // 7. Only animate while visible (saves battery / fixes lag)
    let rafId = 0;
    let running = false;
    let inView = true;

    const loop = () => {
      if (!running) return;
      rafId = requestAnimationFrame(loop);
      renderFrame();
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

    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      sync();
    });
    observer.observe(container);
    document.addEventListener("visibilitychange", sync);

    if (reduceMotion) renderFrame(); // single static frame

    // 8. Resize
    const resizeObserver = new ResizeObserver(() => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      if (width === 0 || height === 0) return;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      if (reduceMotion) renderFrame();
    });
    resizeObserver.observe(container);

    // 9. Theme change -> recolor live
    const handleTheme = () => {
      glow = readColor("--c-glow", "#7c93ff");
      hot = readColor("--c-saffron", "#f4b63f");
      planeMaterial.color.copy(glow);
      nodeMaterial.color.copy(glow).lerp(white, 0.35);
      paintParticles();
      if (reduceMotion) renderFrame();
    };
    window.addEventListener("themechange", handleTheme);

    // 10. Cleanup
    return () => {
      stop();
      observer.disconnect();
      resizeObserver.disconnect();
      document.removeEventListener("visibilitychange", sync);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("themechange", handleTheme);

      scene.remove(plane, particles);
      nodes.forEach((node) => scene.remove(node));

      planeGeometry.dispose();
      planeMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      nodeGeometry.dispose();
      nodeMaterial.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden opacity-90"
    />
  );
}
