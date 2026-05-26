import { motion } from "motion/react";
import { Phone, ClockAlert } from "lucide-react";

export function EmergencyContact() {
  return (
    <section className="bg-[#F9FAFB] py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white border border-slate-200 p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
        >
          <div>
            <h4 className="text-[10px] font-bold text-[#E63946] tracking-widest uppercase mb-4 flex items-center gap-2">
              <span className="w-4 h-[1px] bg-[#E63946]"></span>
              Emergency Support
            </h4>
            <h2 className="text-2xl font-bold text-[#1B365D] mb-2">
              お客様の緊急事態をサポートします
            </h2>
            <p className="text-sm text-slate-500">
              緊急時はいつでもご連絡ください。
            </p>
          </div>

          <div className="bg-[#F9FAFB] p-8 border border-slate-200 min-w-[300px]">
             <p className="text-[10px] font-bold text-slate-400 tracking-widest uppercase mb-3">緊急連絡先</p>
             <a href="tel:080-3364-3354" className="flex items-center gap-3 text-[#1B365D] hover:opacity-80 transition-opacity mb-2">
               <Phone className="w-5 h-5 text-[#E63946]" />
               <span className="text-3xl font-black">080-3364-3354</span>
             </a>
             <p className="text-xs text-slate-400 pt-2 border-t border-slate-200 mt-4">
               繋がらない場合: <span className="font-bold">090-8585-5157</span>
             </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
