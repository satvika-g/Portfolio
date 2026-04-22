import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
  size: number;
  baseOpacity: number;
  opacity: number;
  index: number;
};

type Props = {
  text?: string;
  height?: number;
};

const SPRING = 0.05;
const FRICTION = 0.82;
const MOUSE_RADIUS = 110;
const SAMPLE_STEP = 3;
const MAX_PARTICLES = 2000;

export function ParticleTitle({
  text = "Hi, my name is Satvika",
  height = 230,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({
    x: -9999,
    y: -9999,
    active: false,
  });
  const rafRef = useRef<number | null>(null);
  const dprRef = useRef<number>(1);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = container.clientWidth;
    let cssHeight = height;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    dprRef.current = dpr;

    const setupCanvas = () => {
      width = container.clientWidth;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      dprRef.current = dpr;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(cssHeight * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${cssHeight}px`;
    };

    const buildParticles = () => {
      setupCanvas();
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, width, cssHeight);

      const isSmall = width < 640;
      const fontSize = isSmall ? 44 : width < 900 ? 60 : 80;

      ctx.fillStyle = "#ffffff";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.font = `italic ${fontSize}px 'Instrument Serif', Georgia, serif`;

      const words = text.split(" ");
      const lines: string[] = [];
      const maxLineWidth = width * 0.92;
      let current = "";
      for (const w of words) {
        const test = current ? `${current} ${w}` : w;
        if (ctx.measureText(test).width > maxLineWidth && current) {
          lines.push(current);
          current = w;
        } else {
          current = test;
        }
      }
      if (current) lines.push(current);

      const lineHeight = fontSize * 1.15;
      const totalH = lines.length * lineHeight;
      const startY = cssHeight / 2 - totalH / 2 + lineHeight / 2;

      lines.forEach((line, i) => {
        ctx.fillText(line, width / 2, startY + i * lineHeight);
      });

      const imgW = Math.floor(width * dpr);
      const imgH = Math.floor(cssHeight * dpr);
      const imageData = ctx.getImageData(0, 0, imgW, imgH);
      const data = imageData.data;

      const particles: Particle[] = [];
      const stepDevice = SAMPLE_STEP * dpr;
      let idx = 0;
      for (let y = 0; y < imgH; y += stepDevice) {
        for (let x = 0; x < imgW; x += stepDevice) {
          const i = (Math.floor(y) * imgW + Math.floor(x)) * 4;
          const alpha = data[i + 3];
          if (alpha && alpha > 128) {
            const baseX = x / dpr;
            const baseY = y / dpr;
            const fromTop = Math.random() < 0.5;
            particles.push({
              x: Math.random() * width,
              y: fromTop ? -Math.random() * 200 : cssHeight + Math.random() * 200,
              baseX,
              baseY,
              vx: 0,
              vy: 0,
              size: 1 + Math.random(),
              baseOpacity: 0.6 + Math.random() * 0.4,
              opacity: 0,
              index: idx++,
            });
          }
        }
      }

      if (particles.length > MAX_PARTICLES) {
        const stride = particles.length / MAX_PARTICLES;
        const trimmed: Particle[] = [];
        for (let i = 0; i < MAX_PARTICLES; i++) {
          trimmed.push(particles[Math.floor(i * stride)]);
        }
        particlesRef.current = trimmed;
      } else {
        particlesRef.current = particles;
      }

      ctx.clearRect(0, 0, width, cssHeight);
    };

    buildParticles();

    const onResize = () => {
      buildParticles();
    };
    window.addEventListener("resize", onResize);

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      mouseRef.current.active = true;
    };
    const onMouseLeave = () => {
      mouseRef.current.x = -9999;
      mouseRef.current.y = -9999;
      mouseRef.current.active = false;
    };
    const onTouchMove = (e: TouchEvent) => {
      if (!e.touches[0]) return;
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.touches[0].clientX - rect.left;
      mouseRef.current.y = e.touches[0].clientY - rect.top;
      mouseRef.current.active = true;
    };
    const onTouchEnd = () => {
      mouseRef.current.x = -9999;
      mouseRef.current.y = -9999;
      mouseRef.current.active = false;
    };

    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseleave", onMouseLeave);
    canvas.addEventListener("touchmove", onTouchMove, { passive: true });
    canvas.addEventListener("touchend", onTouchEnd);

    let start = performance.now();
    const loop = (now: number) => {
      const time = (now - start) / 1000;
      ctx.setTransform(dprRef.current, 0, 0, dprRef.current, 0, 0);
      ctx.clearRect(0, 0, width, cssHeight);

      const mouse = mouseRef.current;
      const particles = particlesRef.current;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let glow = 0;
        if (mouse.active && dist < MOUSE_RADIUS) {
          const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS;
          const angle = Math.atan2(dy, dx);
          p.vx += Math.cos(angle) * force * 10;
          p.vy += Math.sin(angle) * force * 10;
          glow = force;
        }

        p.vx += (p.baseX - p.x) * SPRING;
        p.vy += (p.baseY - p.y) * SPRING;
        p.vx *= FRICTION;
        p.vy *= FRICTION;
        p.x += p.vx;
        p.y += p.vy;

        p.x += Math.sin(time + p.index * 0.13) * 0.2;
        p.y += Math.cos(time + p.index * 0.17) * 0.2;

        if (p.opacity < p.baseOpacity) {
          p.opacity = Math.min(p.baseOpacity, p.opacity + 0.02);
        }

        const renderSize = p.size + glow * 1.2;
        const renderOpacity = Math.min(1, p.opacity + glow * 0.3);

        ctx.beginPath();
        ctx.arc(p.x, p.y, renderSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${renderOpacity})`;
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseleave", onMouseLeave);
      canvas.removeEventListener("touchmove", onTouchMove);
      canvas.removeEventListener("touchend", onTouchEnd);
    };
  }, [text, height]);

  return (
    <div
      ref={containerRef}
      className="w-full"
      style={{ height: `${height}px` }}
      aria-label={text}
      role="img"
    >
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}
