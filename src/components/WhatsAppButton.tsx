import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  variant?: "primary" | "outline";
  className?: string;
  children?: React.ReactNode;
}

const WhatsAppButton = ({ variant = "primary", className = "", children }: WhatsAppButtonProps) => {
  const baseClasses = "inline-flex items-center gap-3 px-8 py-4 font-sans text-sm font-medium tracking-widest uppercase transition-all duration-500 cursor-pointer";
  const variants = {
    primary: "bg-gold text-primary-foreground hover:brightness-110 hover:shadow-[0_0_30px_hsl(43_72%_55%/0.3)]",
    outline: "border border-gold-strong text-gold hover:bg-gold/10",
  };

  return (
    <a
      href="https://wa.me/5500000000000"
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      <MessageCircle className="w-4 h-4" />
      {children || "Agendar Avaliação"}
    </a>
  );
};

export default WhatsAppButton;
