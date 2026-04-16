import aboutImage from "@/assets/itallo.jpg";
import SectionDivider from "./SectionDivider";
import { Reveal } from "@/hooks/useScrollReveal";

const AboutSection = () => {
  return (
    <section className="section-padding bg-surface">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          {/* Image */}
          <Reveal direction="left">
            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden group">
                <img
                  src={aboutImage}
                  alt="Dr. Itallo Moreira"
                  className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                  loading="lazy"
                  width={960}
                  height={1280}
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-gold/20" />
            </div>
          </Reveal>

          {/* Text */}
          <div>
            <Reveal direction="right">
              <span className="text-gold font-sans text-xs tracking-[0.3em] uppercase">Sobre</span>
              <h2 className="font-serif text-4xl md:text-5xl font-light mt-4 mb-8">
                Dr. Itallo <span className="gold-text-gradient italic">Moreira</span>
              </h2>
            </Reveal>

            <div className="space-y-5 font-sans text-sm text-muted-foreground leading-[1.9]">
              <Reveal delay={100} direction="right">
                <p>
                  Sou cirurgião-dentista, esposo da Amanda, pai da Mariah — uma das maiores realizações da minha vida —, católico e devoto de Nossa Senhora Aparecida. Valorizo profundamente a família, a fé e os momentos simples que renovam a alma: viajar com quem amo, pescar com amigos, dar boas gargalhadas e aproveitar o descanso ao lado das pessoas que fazem minha vida ter sentido.
                </p>
              </Reveal>
              <Reveal delay={200} direction="right">
                <p>
                  Minha história com a odontologia começou ainda na infância, quando eu acompanhava meu tio em sua clínica. Ele sempre foi um excelente profissional, e conviver naquele ambiente despertou em mim um interesse genuíno pela profissão. Com o tempo, esse interesse se transformou em propósito.
                </p>
              </Reveal>
              <Reveal delay={300} direction="right">
                <p>
                  Entendi que minha missão era ir muito além de tratar dentes: era transformar sorrisos, restabelecer a saúde bucal e, acima de tudo, devolver qualidade de vida às pessoas. Para mim, ser dentista é um compromisso diário com o bem-estar, a autoestima e a confiança de cada paciente.
                </p>
              </Reveal>
              <Reveal delay={400} direction="right">
                <p>
                  Sou formado há 9 anos, especialista em implantes e reabilitação oral, e sigo minha trajetória com dedicação constante. Hoje, concentro minha atuação na cirurgia avançada de papada e pescoço, unindo precisão, estética e naturalidade para valorizar a harmonia facial de cada paciente.
                </p>
              </Reveal>
              <Reveal delay={500} direction="right">
                <p className="text-gold/80 italic font-serif text-base">
                  "Cada atendimento carrega aquilo em que mais acredito: excelência, verdade, sensibilidade e respeito pela história de quem confia em meu trabalho."
                </p>
              </Reveal>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <SectionDivider />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
