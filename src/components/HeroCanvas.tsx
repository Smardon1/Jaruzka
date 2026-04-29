'use client';

import { useEffect, useRef } from 'react';

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const NUM_WAVES = 5;
    const waves = Array.from({ length: NUM_WAVES }, (_, i) => ({
      yOffset: 0.48 + i * 0.05,
      amplitude: 16 - i * 2,
      frequency: 0.007 + i * 0.003,
      speed: 0.00022 + i * 0.00007,
      phase: i * 1.4,
      r: 10 + i * 9, g: 32 + i * 14, b: 80 + i * 16,
      opacity: 0.88 - i * 0.13,
    }));

    const particles: { x: number; y: number; r: number; speed: number; drift: number; opacity: number; twinkle: number }[] = [];
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random(), y: Math.random(),
        r: Math.random() * 1.2 + 0.3,
        speed: Math.random() * 0.0003 + 0.0001,
        drift: (Math.random() - 0.5) * 0.0002,
        opacity: Math.random() * 0.6 + 0.2,
        twinkle: Math.random() * Math.PI * 2,
      });
    }

    const rig = { x: 0.72, lastY: 0 };
    let t = 0;

    function resize() {
      canvas!.width = canvas!.offsetWidth;
      canvas!.height = canvas!.offsetHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    function drawRig(cx: number, cy: number, w: number, h: number) {
      const px = cx * w;
      const py = cy * h;
      const scale = Math.min(w, h) * 0.0015;
      const s = scale * 60;

      ctx!.save();
      ctx!.translate(px, py);

      // Hull / platform base
      ctx!.fillStyle = 'rgba(20,40,80,0.9)';
      ctx!.strokeStyle = 'rgba(200,150,62,0.6)';
      ctx!.lineWidth = 1;
      ctx!.beginPath();
      ctx!.rect(-s * 1.4, -s * 0.15, s * 2.8, s * 0.3);
      ctx!.fill();
      ctx!.stroke();

      // Legs (4 vertical supports)
      const legPositions = [-s * 0.9, -s * 0.3, s * 0.3, s * 0.9];
      legPositions.forEach(lx => {
        ctx!.fillStyle = 'rgba(15,35,70,0.9)';
        ctx!.strokeStyle = 'rgba(200,150,62,0.4)';
        ctx!.lineWidth = 0.5;
        ctx!.beginPath();
        ctx!.rect(lx - s * 0.06, s * 0.15, s * 0.12, s * 0.8);
        ctx!.fill();
        ctx!.stroke();
      });

      // Derrick tower
      ctx!.strokeStyle = 'rgba(200,150,62,0.75)';
      ctx!.lineWidth = 1.5;
      ctx!.beginPath();
      ctx!.moveTo(-s * 0.25, -s * 0.15);
      ctx!.lineTo(0, -s * 1.8);
      ctx!.lineTo(s * 0.25, -s * 0.15);
      ctx!.strokeStyle = 'rgba(30,60,120,0.8)';
      ctx!.lineWidth = 3;
      ctx!.stroke();
      ctx!.strokeStyle = 'rgba(200,150,62,0.55)';
      ctx!.lineWidth = 1;
      ctx!.beginPath();
      // Cross braces on tower
      for (let i = 1; i <= 4; i++) {
        const frac = i / 5;
        const bx = s * 0.25 * (1 - frac);
        const by = -s * 0.15 - s * 1.65 * frac;
        ctx!.moveTo(-bx, by); ctx!.lineTo(bx, by);
      }
      ctx!.stroke();

      // Crown block at top
      ctx!.fillStyle = 'rgba(200,150,62,0.8)';
      ctx!.beginPath();
      ctx!.rect(-s * 0.08, -s * 1.9, s * 0.16, s * 0.12);
      ctx!.fill();

      // Derrick outline
      ctx!.strokeStyle = 'rgba(200,150,62,0.7)';
      ctx!.lineWidth = 1.5;
      ctx!.beginPath();
      ctx!.moveTo(-s * 0.25, -s * 0.15);
      ctx!.lineTo(0, -s * 1.8);
      ctx!.lineTo(s * 0.25, -s * 0.15);
      ctx!.stroke();

      // Crane arm
      ctx!.strokeStyle = 'rgba(200,150,62,0.5)';
      ctx!.lineWidth = 1;
      ctx!.beginPath();
      ctx!.moveTo(-s * 1.1, -s * 0.05);
      ctx!.lineTo(-s * 1.7, -s * 0.5);
      ctx!.stroke();

      // Flare stack
      ctx!.strokeStyle = 'rgba(200,120,40,0.6)';
      ctx!.lineWidth = 1;
      ctx!.beginPath();
      ctx!.moveTo(s * 1.1, -s * 0.15);
      ctx!.lineTo(s * 1.3, -s * 0.9);
      ctx!.stroke();
      // Flare flame
      ctx!.fillStyle = 'rgba(255,150,50,0.5)';
      ctx!.beginPath();
      ctx!.ellipse(s * 1.3, -s * 1.0, s * 0.07, s * 0.13, 0, 0, Math.PI * 2);
      ctx!.fill();

      // Helipad
      ctx!.strokeStyle = 'rgba(200,150,62,0.45)';
      ctx!.lineWidth = 1;
      ctx!.beginPath();
      ctx!.arc(-s * 0.8, -s * 0.25, s * 0.22, 0, Math.PI * 2);
      ctx!.stroke();
      ctx!.beginPath();
      ctx!.moveTo(-s * 0.9, -s * 0.25); ctx!.lineTo(-s * 0.7, -s * 0.25);
      ctx!.moveTo(-s * 0.8, -s * 0.35); ctx!.lineTo(-s * 0.8, -s * 0.15);
      ctx!.stroke();

      // Accommodation block
      ctx!.fillStyle = 'rgba(20,45,90,0.85)';
      ctx!.strokeStyle = 'rgba(200,150,62,0.3)';
      ctx!.lineWidth = 0.5;
      ctx!.beginPath();
      ctx!.rect(s * 0.4, -s * 0.55, s * 0.7, s * 0.4);
      ctx!.fill();
      ctx!.stroke();
      // Windows
      ctx!.fillStyle = 'rgba(200,220,255,0.25)';
      for (let wi = 0; wi < 3; wi++) {
        ctx!.beginPath();
        ctx!.rect(s * 0.47 + wi * s * 0.2, -s * 0.48, s * 0.1, s * 0.07);
        ctx!.fill();
      }

      ctx!.restore();
    }

    function drawScene() {
      const w = canvas!.width;
      const h = canvas!.height;

      // Sky gradient
      const skyGrad = ctx!.createLinearGradient(0, 0, 0, h * 0.55);
      skyGrad.addColorStop(0, '#020a18');
      skyGrad.addColorStop(0.4, '#06101e');
      skyGrad.addColorStop(0.7, '#0a1a30');
      skyGrad.addColorStop(1, '#0d2040');
      ctx!.fillStyle = skyGrad;
      ctx!.fillRect(0, 0, w, h);

      // Stars
      particles.forEach(p => {
        p.y -= p.speed;
        p.x += p.drift;
        p.twinkle += 0.025;
        if (p.y < 0) { p.y = 0.6; p.x = Math.random(); }
        if (p.x < 0) p.x = 1;
        if (p.x > 1) p.x = 0;
        const op = p.opacity * (0.65 + 0.35 * Math.sin(p.twinkle));
        ctx!.beginPath();
        ctx!.arc(p.x * w, p.y * h * 0.6, p.r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(255,255,255,${op})`;
        ctx!.fill();
      });

      // Horizon glow
      const hGrad = ctx!.createLinearGradient(0, h * 0.38, 0, h * 0.55);
      hGrad.addColorStop(0, 'rgba(200,150,62,0.08)');
      hGrad.addColorStop(0.5, 'rgba(200,150,62,0.03)');
      hGrad.addColorStop(1, 'transparent');
      ctx!.fillStyle = hGrad;
      ctx!.fillRect(0, h * 0.38, w, h * 0.17);

      // Moon
      ctx!.save();
      const moonX = w * 0.15, moonY = h * 0.18;
      const moonGrad = ctx!.createRadialGradient(moonX, moonY, 0, moonX, moonY, 18);
      moonGrad.addColorStop(0, 'rgba(255,248,220,0.85)');
      moonGrad.addColorStop(0.5, 'rgba(240,220,160,0.5)');
      moonGrad.addColorStop(1, 'transparent');
      ctx!.fillStyle = moonGrad;
      ctx!.beginPath();
      ctx!.arc(moonX, moonY, 18, 0, Math.PI * 2);
      ctx!.fill();
      ctx!.restore();

      // Waves (back to front)
      for (let i = NUM_WAVES - 1; i >= 0; i--) {
        const wv = waves[i];
        const baseY = wv.yOffset * h;
        ctx!.beginPath();
        ctx!.moveTo(0, h);
        for (let x = 0; x <= w; x += 3) {
          const y = baseY
            + Math.sin(x * wv.frequency + t * wv.speed * 1000 + wv.phase) * wv.amplitude
            + Math.sin(x * wv.frequency * 1.7 + t * wv.speed * 800) * wv.amplitude * 0.35;
          ctx!.lineTo(x, y);
        }
        ctx!.lineTo(w, h);
        ctx!.closePath();
        ctx!.fillStyle = `rgba(${wv.r},${wv.g},${wv.b},${wv.opacity})`;
        ctx!.fill();

        // Wave crests
        if (i < 2) {
          ctx!.beginPath();
          for (let x = 0; x <= w; x += 3) {
            const y = baseY
              + Math.sin(x * wv.frequency + t * wv.speed * 1000 + wv.phase) * wv.amplitude
              + Math.sin(x * wv.frequency * 1.7 + t * wv.speed * 800) * wv.amplitude * 0.35;
            if (x === 0) ctx!.moveTo(x, y);
            else ctx!.lineTo(x, y);
          }
          ctx!.strokeStyle = `rgba(200,180,120,${0.1 - i * 0.03})`;
          ctx!.lineWidth = 1;
          ctx!.stroke();
        }
      }

      // Rig position on wave
      const frontWave = waves[0];
      const rigWaveY = frontWave.yOffset * h
        + Math.sin(rig.x * w * frontWave.frequency + t * frontWave.speed * 1000 + frontWave.phase) * frontWave.amplitude * 0.5;
      drawRig(rig.x, rigWaveY / h - 0.02, w, h);

      t += 0.016;
      animRef.current = requestAnimationFrame(drawScene);
    }

    animRef.current = requestAnimationFrame(drawScene);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
    />
  );
}
