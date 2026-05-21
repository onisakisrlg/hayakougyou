import { motion } from "motion/react";
import { ArrowRight, Globe2 } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[70vh] flex flex-col justify-center bg-[#F9FAFB] border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full py-20 flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-2 mb-8"
          >
            <div className="inline-block bg-[#1B365D] text-white text-[10px] sm:text-xs px-4 py-2 font-bold tracking-widest w-max flex items-center gap-2">
              <Globe2 className="w-4 h-4" />
              中日国際定期航路 | 日本発 中国向け
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-[#1A1A1A] leading-[1.1] mb-8 tracking-tight"
          >
            迅速な納期・誠実な経営<br/>
            専門の対応・安全な輸送
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-12 border-l-2 border-[#E63946] pl-6"
          >
             <p className="text-xl text-slate-500 font-light">大切な荷物を<span className="font-medium text-[#1B365D]">安価</span>で<span className="font-medium text-[#1B365D]">安全</span>に海外へ輸送します。</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#E63946] hover:bg-[#c22f3b] text-white text-sm font-bold tracking-widest uppercase transition-colors group"
            >
              無料でお見積もり・ご相談
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Hero Image Placeholder */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full lg:w-[450px] relative hidden sm:block"
        >
          <div className="absolute inset-0 bg-[#E63946]/10 translate-x-4 translate-y-4"></div>
          <div className="absolute inset-0 bg-[#1B365D] translate-x-2 translate-y-2"></div>
          <div className="relative h-[400px] lg:h-[500px] bg-slate-200 border-2 border-[#1B365D] overflow-hidden group">
            <img 
              src="https://placehold.co/800x1000/e2e8f0/64748b?text=Main+Hero+Image" 
              alt="Hero Placeholder" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 mix-blend-multiply" 
            />
            <div className="absolute bottom-4 left-4 bg-white px-3 py-1.5 text-[10px] font-bold tracking-widest uppercase text-[#1B365D]">
              Image Slot: Hero <span className="font-normal text-slate-500 ml-1">(e.g. Ship)</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
