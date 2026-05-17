"use client";

import { useEffect, useRef } from "react";

/** Cursor-reactive dot grid. Ported verbatim from the prototype.
 *  Disabled when prefers-reduced-motion is set. */
export function HeroGrid() {
  const ref = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -1000, y: -1000, active: false });

  useEffect(() => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let w = 0;
    let h = 0;
    let dpr = 1;
    const dots: { x: number; y: number; ox: number; oy: number }[] = [];

    const resize = () => {
      dpr = Math.min(2, window.devicePixelRatio || 1);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      dots.length = 0;
      const gap = 28;
      for (let y = gap / 2; y < h; y += gap) {
        for (let x = gap / 2; x < w; x += gap) {
          dots.push({ x, y, ox: x, oy: y });
        }
      }
    };

    const onMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      mouse.current.x = e.clientX - r.left;
      mouse.current.y = e.clientY - r.top;
      mouse.current.active = true;
    };
    const onLeave = () => {
      mouse.current.active = false;
      mouse.current.x = -1000;
    };

    const render = () => {
      ctx.clearRect(0, 0, w, h);
      const mx = mouse.current.x;
      const my = mouse.current.y;
      const R = 160;
      for (const d of dots) {
        const dx = d.ox - mx;
        const dy = d.oy - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        let alpha = 0.10;
        let size = 1.0;
        if (dist < R) {
          const k = 1 - dist / R;
          alpha = 0.10 + k * 0.7;
          size = 1.0 + k * 2.2;
        }
        ctx.fillStyle = `oklch(0.88 0.17 130 / ${alpha})`;
        ctx.beginPath();
        ctx.arc(d.ox, d.oy, size, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(render);
    };

    resize();
    render();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return <canvas ref={ref} className="hero-grid-canvas" aria-hidden="true" />;
}
