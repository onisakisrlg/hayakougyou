import { motion } from "motion/react";
import { FAQS } from "../data";
import { HelpCircle } from "lucide-react";

export function FAQ() {
  return (
    <section id="faq" className="bg-[#F9FAFB] py-20 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="mb-12">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold text-[#E63946] tracking-widest mb-4 flex items-center gap-2"
          >
            <span className="w-4 h-[1px] bg-[#E63946]"></span> FAQ / お悩み解決
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl font-extrabold text-[#1B365D] mb-6"
          >
            大切な貨物の海外輸送で<br/>こんなお悩みありませんか？
          </motion.h2>
        </div>

        <div className="space-y-6 max-w-4xl bg-white p-10 border border-slate-200">
          {FAQS.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.2 }}
              className="border-b border-slate-100 pb-6 last:border-0 last:pb-0"
            >
              <h3 className="text-sm md:text-base font-bold mb-2 text-slate-900">
                Q: {faq.question}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed pl-6 border-l-2 border-slate-200">
                A: {faq.answer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
