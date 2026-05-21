import { motion } from "motion/react";
import { FEATURES } from "../data";

export function Features() {
  return (
    <section id="services" className="bg-[#F9FAFB] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20">
        <div className="mb-12">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] font-bold text-slate-400 tracking-widest uppercase mb-4"
          >
            OUR SERVICES
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl font-extrabold text-[#1B365D] mb-6"
          >
            コンテナ海外運輸サービス
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-500 font-light"
          >
            お客様の多様なニーズに応える、柔軟で確実な海上輸送ソリューションを提供します。
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 border border-slate-200">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className="bg-white p-8 md:p-10 flex flex-col justify-between h-full hover:bg-slate-50 transition-colors"
            >
              <div>
                <span className="text-[#1B365D] font-bold text-2xl mb-6 block">0{index + 1}</span>
                <h3 className="font-bold text-lg mb-3 text-slate-900">{feature.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
