import { Instagram, Phone, MapPin } from "lucide-react";
import logoImage from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="py-16 bg-background border-t border-border">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {/* Brand */}
          <div>
            <div className="mb-6">
              <img src={logoImage} alt="Dr. Itallo Moreira Logo" className="h-12 w-auto object-contain" />
            </div>
            <p className="font-sans text-xs text-muted-foreground leading-relaxed">
              Cirurgião-dentista especialista em cirurgia avançada de papada e pescoço. Contorno facial natural com técnica, precisão e sofisticação.
            </p>
          </div>

          {/* Specialties */}
          <div>
            <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-gold mb-4">Especialidades</h4>
            <ul className="space-y-2 font-sans text-sm text-muted-foreground">
              <li>Lipo 4D</li>
              <li>Deep Neck</li>
              <li>Platismoplastia</li>
              <li>Deep Plane</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-gold mb-4">Contato</h4>
            <div className="space-y-3 font-sans text-sm text-muted-foreground">
              <a href="https://wa.me/5500000000000" className="flex items-center gap-3 hover:text-gold transition-colors">
                <Phone className="w-4 h-4" strokeWidth={1.5} />
                WhatsApp
              </a>
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-gold transition-colors">
                <Instagram className="w-4 h-4" strokeWidth={1.5} />
                Instagram
              </a>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4" strokeWidth={1.5} />
                Localização a definir
              </div>
            </div>
          </div>
        </div>

        <div className="gold-line mt-12 mb-8" />

        <div className="text-center">
          <p className="font-sans text-xs text-muted-foreground/50">
            © {new Date().getFullYear()} Dr. Itallo Moreira — Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
