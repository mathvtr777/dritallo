import { PlayCircle } from "lucide-react";
import { Reveal } from "@/hooks/useScrollReveal";

const testimonials = [
  {
    videoSrc: "/videos/Fernanda.mp4",
    name: "Fernanda",
    procedure: "Recontorno em resina",
  },
  {
    videoSrc: "/videos/gislene.mp4",
    name: "Gislene",
    procedure: "Recontorno em resina",
  },
  {
    videoSrc: "/videos/lais.mp4",
    name: "Laís",
    procedure: "Harmonização facial",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-surface">
      <div className="container mx-auto px-6 lg:px-16">
        <Reveal>
          <div className="text-center mb-16">
            <span className="text-gold font-sans text-xs tracking-[0.3em] uppercase">Depoimentos</span>
            <h2 className="font-serif text-4xl md:text-5xl font-light mt-4 mb-6">
              O que dizem nossos <span className="gold-text-gradient italic">pacientes</span>
            </h2>
            <div className="gold-line w-24 mx-auto" />
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 md:px-0">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 200}>
              <div className="relative group rounded-xl overflow-hidden border border-white/5 bg-gradient-to-b from-surface to-background hover:border-gold/30 transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(212,175,55,0.15)] flex flex-col">
                {/* Subtle top glow line */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative aspect-[9/16] bg-black overflow-hidden flex-shrink-0">
                  {t.videoSrc ? (
                    <video 
                      src={t.videoSrc} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.03] opacity-90 group-hover:opacity-100"
                      controls
                      playsInline
                      preload="metadata"
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground bg-surface border-b border-white/5">
                      <PlayCircle className="w-12 h-12 mb-3 text-gold/30 transition-transform duration-500 group-hover:scale-110" strokeWidth={1} />
                      <span className="text-[10px] uppercase tracking-[0.2em] font-sans text-white/40">Vídeo em breve</span>
                    </div>
                  )}
                </div>
                <div className="p-8 text-center flex-grow flex flex-col justify-center items-center z-10">
                  <p className="font-serif text-2xl tracking-wide text-foreground/90 group-hover:text-white transition-colors duration-500">{t.name}</p>
                  <div className="w-8 h-[1px] bg-gold/30 my-4 transition-all duration-500 group-hover:w-16 group-hover:bg-gold/60" />
                  <p className="font-sans text-[10px] font-medium tracking-[0.2em] uppercase text-gold/80">{t.procedure}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
