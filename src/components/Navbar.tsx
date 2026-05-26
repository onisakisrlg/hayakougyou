import { motion } from "motion/react";
import { Ship } from "lucide-react";

export function Navbar() {
  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex items-center justify-between px-6 md:px-10 pt-6 pb-4 border-b border-slate-200 bg-[#F9FAFB]/90 backdrop-blur-md sticky top-0 z-50"
    >
      <div className="flex flex-col">
        <a href="#" className="mb-1.5 flex items-center">
          <img src="https://i.postimg.cc/GtWz4ZVr/4.jpg" alt="早興業株式会社" className="h-10 md:h-12 object-contain" />
        </a>
        <p className="text-[10px] tracking-[0.15em] uppercase text-slate-400">Japan to China Shipping Liner Route</p>
      </div>
      <nav className="hidden md:flex gap-8 text-xs font-medium tracking-widest text-slate-500">
        <a href="#services" className="hover:text-[#1B365D] transition-colors">SERVICES</a>
        <a href="#business" className="hover:text-[#1B365D] transition-colors">BUSINESS</a>
        <a href="#company" className="hover:text-[#1B365D] transition-colors">COMPANY</a>
        <a href="#faq" className="hover:text-[#1B365D] transition-colors">FAQ</a>
        <a href="#contact" className="text-[#E63946] hover:opacity-80 transition-opacity">CONTACT</a>
      </nav>
    </motion.header>
  );
}
