import { Reveal } from "@/hooks/useScrollReveal";
import { Instagram } from "lucide-react";

const ResultsSection = () => {
  const resultImages = [
    "/resultados/SaveClip.App_503448024_18509972719027661_4038237170952290294_n.jpg",
    "/resultados/SaveClip.App_626208639_18558724735027661_895172521690948459_n.jpg",
    "/resultados/SaveClip.App_640347240_18566503747027661_7920395328474574484_n.jpg",
    "/resultados/SaveClip.App_659399661_18577556770027661_707385945999711731_n.jpg",
    "/resultados/SaveClip.App_670405916_18579692809027661_2477920002720432114_n.jpg"
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-6 lg:px-16">
        <Reveal>
          <div className="text-center mb-16">
            <span className="text-gold font-sans text-xs tracking-[0.3em] uppercase">Resultados</span>
            <h2 className="font-serif text-4xl md:text-5xl font-light mt-4 mb-6">
              Transformações <span className="gold-text-gradient italic">reais</span>
            </h2>
            <div className="gold-line w-24 mx-auto mb-8" />
            <p className="font-sans text-sm text-muted-foreground max-w-xl mx-auto">
              Cada resultado reflete o compromisso com a naturalidade, a harmonia e o refinamento estético.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4 md:px-0">
          {resultImages.map((src, i) => (
            <Reveal key={i} delay={i * 120} direction="none">
              <div className="aspect-[3/4] rounded-xl bg-surface border border-white/5 flex items-center justify-center group hover:border-gold/30 transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(212,175,55,0.15)] overflow-hidden relative">
                <img 
                  src={src} 
                  alt={`Resultado ${i + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.05] opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col items-center justify-end pb-8">
                  <span className="font-serif text-2xl text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-out">Antes & Depois</span>
                  <div className="w-12 h-[1px] bg-gold/60 my-3 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out delay-100 origin-center" />
                  <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-gold translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-out delay-75">Ver Detalhes</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="text-center font-sans text-xs text-muted-foreground/50 mt-8 mb-10 italic">
            *Os resultados podem variar de pessoa para pessoa. Cada caso é avaliado individualmente.
          </p>
          <div className="text-center">
            <a 
              href="https://instagram.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 font-sans text-[11px] font-medium tracking-[0.15em] uppercase transition-all duration-500 border border-gold/30 text-gold hover:bg-gold hover:text-background rounded hover:shadow-[0_0_20px_hsl(43_72%_55%/0.2)] group"
            >
              <Instagram className="w-5 h-5 transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110" strokeWidth={1.5} />
              Ver mais resultados no instagram
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ResultsSection;
