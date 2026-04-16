import { Reveal } from "@/hooks/useScrollReveal";
import WhatsAppButton from "./WhatsAppButton";

const FinalCTA = () => {
  return (
    <section className="section-padding bg-surface relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/[0.03] blur-3xl animate-pulse" />

      <div className="container mx-auto px-6 lg:px-16 relative z-10 text-center">
        <Reveal>
          <span className="text-gold font-sans text-xs tracking-[0.3em] uppercase">Próximo passo</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mt-4 mb-6 max-w-3xl mx-auto leading-tight">
            Transforme sua <span className="gold-text-gradient italic">confiança</span>
          </h2>
          <div className="gold-line w-24 mx-auto mb-8" />
        </Reveal>
        <Reveal delay={200}>
          <p className="font-sans text-sm text-muted-foreground leading-relaxed max-w-xl mx-auto mb-10">
            Agende sua avaliação personalizada e descubra como a cirurgia avançada de papada e pescoço pode valorizar a harmonia natural do seu rosto. Atendimento exclusivo e individualizado.
          </p>
          <WhatsAppButton>Falar no WhatsApp</WhatsAppButton>
        </Reveal>
      </div>
    </section>
  );
};

export default FinalCTA;
