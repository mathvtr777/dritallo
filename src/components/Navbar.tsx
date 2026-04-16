import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";
import logoImage from "@/assets/logoofc.png";

const navLinks = [
  { label: "Procedimentos", href: "#procedimentos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Sobre", href: "#sobre" },
  { label: "Resultados", href: "#resultados" },
  { label: "Contato", href: "#contato" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/95 backdrop-blur-md border-b border-border py-2" : "bg-transparent py-4"}`}>
      <div className="container mx-auto px-6 lg:px-16 flex items-center justify-between h-20 md:h-24">
        <a href="#" className="flex items-center">
          <img src={logoImage} alt="Dr. Itallo Moreira Logo" className="h-20 md:h-28 w-auto object-contain scale-[2.5] md:scale-[2] origin-left" />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="font-sans text-xs tracking-widest uppercase text-muted-foreground hover:text-gold transition-colors duration-300">
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <WhatsAppButton className="!py-2.5 !px-5 !text-[10px]" />
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground" aria-label="Menu">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-t border-border px-6 py-8 space-y-6">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="block font-sans text-sm tracking-widest uppercase text-muted-foreground hover:text-gold transition-colors">
              {link.label}
            </a>
          ))}
          <WhatsAppButton className="!py-3 !text-xs w-full justify-center" />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
