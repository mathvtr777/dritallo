import heroImage from "@/assets/hero.jpg";
import WhatsAppButton from "./WhatsAppButton";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Dr. Itallo Moreira - Cirurgião especialista em papada e pescoço"
          className="w-full h-full object-cover object-top"
          width={1024}
          height={1344}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-16 py-32">
        <div className="max-w-2xl">
          <div className="animate-fade-up">
            <div className="flex items-center gap-3 mb-8">
              <div className="gold-line-left w-12" />
              <span className="text-gold font-sans text-xs tracking-[0.3em] uppercase">
                Cirurgia Avançada
              </span>
            </div>

            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] mb-6">
              <span className="text-foreground">Dr. Itallo</span>
              <br />
              <span className="gold-text-gradient">Moreira</span>
            </h1>
          </div>

          <div className="animate-fade-up-delay-1">
            <p className="font-serif text-xl md:text-2xl text-foreground/80 font-light leading-relaxed mb-4">
              Cirurgia avançada de papada e pescoço com contorno facial natural
            </p>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed max-w-lg mb-10">
              Técnica, precisão e sofisticação para redefinir a harmonia facial com resultados elegantes e personalizados.
            </p>
          </div>

          <div className="animate-fade-up-delay-2 flex flex-wrap gap-3 mb-12">
            {["Lipo 4D", "Deep Neck", "Platismoplastia", "Deep Plane"].map((proc) => (
              <span
                key={proc}
                className="px-4 py-2 border border-gold/20 text-gold/80 font-sans text-xs tracking-widest uppercase"
              >
                {proc}
              </span>
            ))}
          </div>

          <div className="animate-fade-up-delay-3">
            <WhatsAppButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
