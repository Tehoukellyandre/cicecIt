import { useEffect, useRef } from "react";



export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Load image
    const img = new Image();
    img.src = "IMG/cicec.png";

    // Canvas Resize
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Continents (POSITIONS AJUSTÉES)
    const continents = [
      // Gauche (Vert)
      { name: "", x: 0.15, y: 0.3, color: "rgba(34, 197, 94, 0.8)" },
      // Haut (Jaune)
      { name: "", x: 0.5, y: 0.15, color: "rgba(234, 179, 8, 0.8)" },
      // Droite (Rouge)
      { name: "", x: 0.85, y: 0.25, color: " rgba(239, 68, 68, 0.8)" },
      // Centre (Logo) - Monté à y: 0.45 pour être sous le texte
      { name: "", x: 0.5, y: 0.6, color: "white", center: true },
    ];

    // Particles
    const particles: any[] = [];
    const createParticles = () => {
      const africaIndex = continents.findIndex((c) => c.center);
      continents.forEach((continent, index) => {
        if (!continent.center) {
          for (let i = 0; i < 15; i++) {
            particles.push({
              x: continent.x * canvas.offsetWidth,
              y: continent.y * canvas.offsetHeight,
              targetX: continents[africaIndex].x * canvas.offsetWidth,
              targetY: continents[africaIndex].y * canvas.offsetHeight,
              progress: Math.random(),
              speed: 0.002 + Math.random() * 0.003,
              fromIndex: index,
            });
          }
        }
      });
    };
    createParticles();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      // Draw lines
      continents.forEach((continent) => {
        if (!continent.center) {
          const africa = continents.find((c) => c.center)!;
          ctx.beginPath();
          ctx.moveTo(continent.x * canvas.offsetWidth, continent.y * canvas.offsetHeight);
          ctx.lineTo(africa.x * canvas.offsetWidth, africa.y * canvas.offsetHeight);
          ctx.strokeStyle = `${continent.color.replace("0.8", "0.2")}`;
          ctx.lineWidth = 2;
          ctx.stroke();
        }
      });

      // Draw particles
      particles.forEach((p) => {
        p.progress += p.speed;
        if (p.progress >= 1) {
          p.progress = 0;
          const from = continents[p.fromIndex];
          p.x = from.x * canvas.offsetWidth;
          p.y = from.y * canvas.offsetHeight;
        }

        const x = p.x + (p.targetX - p.x) * p.progress;
        const y = p.y + (p.targetY - p.y) * p.progress;

        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fillStyle = continents[p.fromIndex].color;
        ctx.fill();
      });

      // Draw continents
      continents.forEach((continent) => {
        const x = continent.x * canvas.offsetWidth;
        const y = continent.y * canvas.offsetHeight;

        if (continent.center) {
          const size = 120; // TAILLE AUGMENTÉE
          
          // Glow Effect
          const gradient = ctx.createRadialGradient(x, y, 0, x, y, size * 1.2);
          gradient.addColorStop(0, "rgba(255,255,255,0.35)");
          gradient.addColorStop(1, "rgba(255,255,255,0)");
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(x, y, size * 1.2, 0, Math.PI * 2);
          ctx.fill();

          // Draw the image
          if (img.complete) {
            ctx.drawImage(img, x - size * 1.5, y - size, size * 3, size * 2);
          }

        } else {
          // Glow
          const radius = 20;
          const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius * 2);
          gradient.addColorStop(0, continent.color);
          gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(x, y, radius * 2, 0, Math.PI * 2);
          ctx.fill();

          // Dot
          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fillStyle = continent.color;
          ctx.fill();
        }

        // Labels
        ctx.fillStyle = "white";
        ctx.font = `${continent.center ? "bold 17px" : "14px"} sans-serif`;
        ctx.textAlign = "center";
        ctx.fillText(continent.name, x, y + 40);
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return (
    <div className="min-h-screen bg-background">
        <section className="relative h-screen overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 size-full" />
{/* <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" /> */}

      <div className="container relative z-10 mx-auto px-4 py-20 md:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-block">
            <div className="relative">
                <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 pt-10">
                    Le Carrefour de l&apos;Innovation
                </h2>
              {/* Decorative accent lines inspired by logo colors */}
              <div className="absolute -bottom-4 left-0 right-0 flex justify-center gap-2">
                <div className="h-1 w-12 bg-gold rounded-full" />
                <div className="h-1 w-12 bg-green rounded-full" />
                <div className="h-1 w-12 bg-red rounded-full" />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 pt-61">
            <p className="text-lg md:text-xl text-gray-500 whitespace-nowrap">
              Carrefour Inter Continental des Échanges Commerciaux
            </p>
            <div className="w-32 h-1 bg-[#FF0000] rounded-full" />
          </div>

          
        </div>
      </div>

      {/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" /> */}
       
      </section>

    </div>
  );
}