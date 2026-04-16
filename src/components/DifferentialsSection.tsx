import { Sparkles, Target, User, Heart, Crosshair, Shield } from "lucide-react";
import { Reveal } from "@/hooks/useScrollReveal";

const differentials = [
  { icon: Sparkles, title: "Contorno Facial Natural", desc: "Resultados que respeitam a harmonia natural de cada rosto" },
  { icon: Target, title: "Técnica Avançada", desc: "Procedimentos de última geração com precisão milimétrica" },
  { icon: User, title: "Planejamento Individual", desc: "Cada caso é único e recebe atenção personalizada" },
  { icon: Heart, title: "Atendimento Humanizado", desc: "Acolhimento, sensibilidade e respeito em cada etapa" },
  { icon: Crosshair, title: "Precisão Cirúrgica", desc: "Compromisso absoluto com a excelência técnica" },
  { icon: Shield, title: "Alto Padrão Estético", desc: "Refinamento e sofisticação em cada resultado" },
];

const DifferentialsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-6 lg:px-16">
        <Reveal>
          <div className="text-center mb-16">
            <span className="text-gold font-sans text-xs tracking-[0.3em] uppercase">Diferenciais</span>
            <h2 className="font-serif text-4xl md:text-5xl font-light mt-4 mb-6">
              O que nos <span className="gold-text-gradient italic">diferencia</span>
            </h2>
            <div className="gold-line w-24 mx-auto" />
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {differentials.map(({ icon: Icon, title, desc }, i) => (
            <Reveal key={title} delay={i * 100} direction="none">
              <div className="group text-center p-8 hover:bg-surface transition-all duration-500 h-full">
                <div className="inline-flex items-center justify-center w-12 h-12 border border-gold/20 mb-6 group-hover:border-gold/50 group-hover:rotate-[5deg] group-hover:scale-110 transition-all duration-500">
                  <Icon className="w-5 h-5 text-gold" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-lg mb-3">{title}</h3>
                <p className="font-sans text-xs text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
