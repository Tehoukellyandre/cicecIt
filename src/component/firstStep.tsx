import { ArrowDown } from "lucide-react";

export function Hero (){
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-logo-green overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 container-custom text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 opacity-0 animate-fade-in">
            <span className="text-logo-gold">CICEC</span> <span className="text-logo-red">AFRIQUE</span>
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-primary-foreground/90 font-light leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Votre partenaire de choix pour réussir votre{" "}
            <span className="font-semibold text-accent">transformation numérique</span>{" "}
            selon vos besoins spécifiques.
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <div className="flex flex-col items-center gap-2 text-primary-foreground/60">
            <span className="text-sm tracking-widest uppercase">Découvrir</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};
