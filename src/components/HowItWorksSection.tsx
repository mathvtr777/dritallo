import { Reveal } from "@/hooks/useScrollReveal";

const steps = [
  {
    number: "01",
    title: "Avaliação Personalizada",
    desc: "Consulta detalhada para entender seus desejos, expectativas e traçar o melhor plano.",
  },
  {
    number: "02",
    title: "Planejamento Cirúrgico",
    desc: "Planejamento individualizado com tecnologia e precisão para resultados previsíveis.",
  },
  {
    number: "03",
    title: "Procedimento",
    desc: "Execução com técnica avançada, segurança e foco em resultados naturais e harmoniosos.",
  },
  {
    number: "04",
    title: "Pós-Operatório",
    desc: "Orientações detalhadas e suporte completo para uma recuperação tranquila e segura.",
  },
  {
    number: "05",
    title: "Acompanhamento",
    desc: "Acompanhamento contínuo para garantir a excelência e satisfação com o resultado final.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-6 lg:px-16">
        <Reveal>
          <div className="text-center mb-16">
            <span className="text-gold font-sans text-xs tracking-[0.3em] uppercase">Jornada</span>
            <h2 className="font-serif text-4xl md:text-5xl font-light mt-4 mb-6">
              Como <span className="gold-text-gradient italic">funciona</span>
            </h2>
            <div className="gold-line w-24 mx-auto" />
          </div>
        </Reveal>

        <div className="max-w-3xl mx-auto">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 120}>
              <div className="flex gap-8 group">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 border border-gold/30 flex items-center justify-center group-hover:border-gold group-hover:bg-gold/5 transition-all duration-500">
                    <span className="font-sans text-xs text-gold">{step.number}</span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-px h-full bg-border min-h-[60px]" />
                  )}
                </div>
                <div className="pb-10">
                  <h3 className="font-serif text-xl mb-2">{step.title}</h3>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
