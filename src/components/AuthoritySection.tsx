import { Reveal } from "@/hooks/useScrollReveal";
import SectionDivider from "./SectionDivider";

const stats = [
  { number: "9+", label: "Anos de formação" },
  { number: "4", label: "Procedimentos avançados" },
  { number: "100%", label: "Atendimento individualizado" },
];

const AuthoritySection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="text-center mb-16">
          <Reveal>
            <span className="text-gold font-sans text-xs tracking-[0.3em] uppercase">Autoridade</span>
            <h2 className="font-serif text-4xl md:text-5xl font-light mt-4 mb-6">
              Excelência em cada <span className="gold-text-gradient italic">detalhe</span>
            </h2>
            <div className="gold-line w-24 mx-auto mb-8" />
          </Reveal>
          <Reveal delay={150}>
            <p className="font-sans text-muted-foreground text-sm leading-relaxed max-w-2xl mx-auto">
              Cirurgião-dentista com mais de 9 anos de experiência, especialista em implantes e reabilitação oral, com atuação dedicada à cirurgia avançada de papada e pescoço. Cada procedimento é conduzido com precisão técnica e compromisso com a naturalidade dos resultados.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 150}>
              <div className="text-center p-8 border border-border hover:border-gold/30 transition-all duration-500 hover:shadow-[0_0_40px_hsl(43_72%_55%/0.05)]">
                <span className="font-serif text-5xl gold-text-gradient">{stat.number}</span>
                <p className="font-sans text-xs tracking-widest uppercase text-muted-foreground mt-4">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-20">
          <SectionDivider />
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
