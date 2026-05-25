import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function BusinessContent() {
  return (
    <section id="business" className="bg-white py-20 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <motion.h4 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[10px] font-bold text-[#E63946] tracking-widest uppercase mb-4 flex items-center gap-2"
            >
              <span className="w-4 h-[1px] bg-[#E63946]"></span>
              BUSINESS
            </motion.h4>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl font-extrabold text-[#1B365D] mb-4"
            >
              業務内容・取扱品目
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-sm text-slate-500"
            >
              輸出入業務および取り扱い商品についての詳細です。（※ご準備いただく資料に基づいて更新いたします）
            </motion.p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className="group bg-[#F9FAFB] border border-slate-200 hover:border-[#1B365D] hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="h-48 bg-slate-200 border-b border-slate-200 relative overflow-hidden flex-shrink-0">
                <img 
                  src={`https://placehold.co/600x400/e2e8f0/64748b?text=Product+0${item}`}
                  alt={`Product ${item}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 mix-blend-multiply"
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="font-bold text-lg text-[#1B365D] mb-3">取扱品目 {item}</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-6 flex-1">
                  （※画像と説明文の資料を受け取り次第、こちらに反映いたします。）
                </p>
                <div className="flex items-center gap-2 text-[10px] font-bold text-[#E63946] tracking-widest uppercase mt-auto">
                  DETAILS <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
