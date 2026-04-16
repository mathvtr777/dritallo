import { Reveal } from "@/hooks/useScrollReveal";
import WhatsAppButton from "./WhatsAppButton";

const procedures = [
  {
    name: "Lipo 4D",
    description: "Lipoaspiração de alta definição que esculpe e redefine o contorno cervical e facial com precisão milimétrica.",
    benefit: "Definição precisa do contorno facial",
  },
  {
    name: "Deep Neck",
    description: "Técnica avançada para tratamento profundo das estruturas do pescoço, eliminando a flacidez e redefinindo o ângulo cervicomentoniano.",
    benefit: "Rejuvenescimento profundo do pescoço",
  },
  {
    name: "Platismoplastia",
    description: "Procedimento cirúrgico sofisticado que trata o músculo platisma, devolvendo firmeza e contorno elegante à região cervical.",
    benefit: "Firmeza e contorno cervical refinado",
  },
  {
    name: "Deep Plane",
    description: "A técnica mais avançada de rejuvenescimento facial, atuando em planos profundos para resultados naturais e duradouros.",
    benefit: "Resultados naturais e duradouros",
  },
];

const ProceduresSection = () => {
  return (
    <section className="section-padding bg-surface">
      <div className="container mx-auto px-6 lg:px-16">
        <Reveal>
          <div className="text-center mb-16">
            <span className="text-gold font-sans text-xs tracking-[0.3em] uppercase">Procedimentos</span>
            <h2 className="font-serif text-4xl md:text-5xl font-light mt-4 mb-6">
              Técnicas de <span className="gold-text-gradient italic">excelência</span>
            </h2>
            <div className="gold-line w-24 mx-auto" />
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {procedures.map((proc, i) => (
            <Reveal key={proc.name} delay={i * 120} direction={i % 2 === 0 ? "left" : "right"}>
              <div className="group p-8 md:p-10 border border-border bg-background hover:border-gold/30 transition-all duration-500 hover:shadow-[0_0_40px_hsl(43_72%_55%/0.05)] h-full">
                <span className="font-sans text-xs text-gold/50 tracking-widest">0{i + 1}</span>
                <h3 className="font-serif text-2xl md:text-3xl mt-3 mb-4 group-hover:gold-text-gradient transition-all duration-500">
                  {proc.name}
                </h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-6">
                  {proc.description}
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-6 gold-line-left" />
                  <span className="font-sans text-xs text-gold/80 tracking-wide">{proc.benefit}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="text-center mt-14">
            <WhatsAppButton variant="outline">Saiba mais</WhatsAppButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ProceduresSection;
