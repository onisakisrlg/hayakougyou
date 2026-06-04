import { motion } from "motion/react";

export function Gallery() {
  return (
    <section className="bg-white py-20 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="mb-12">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] font-bold text-[#E63946] tracking-widest uppercase mb-4 flex items-center gap-2"
          >
            <span className="w-4 h-[1px] bg-[#E63946]"></span>
            GALLERY / 設備・実績
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl font-extrabold text-[#1B365D] mb-6"
          >
            設備・実績
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm text-slate-500 mb-8 max-w-2xl"
          >
            当社のコンテナヤードや作業風景、実績などの画像をご紹介します。安全かつ丁寧な作業を心がけております。
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "設備・実績 01", image: "https://i.postimg.cc/fW1Mdgpj/2c6651431b94b23f380a88b9add952a1.jpg", delay: 0.2 },
            { title: "設備・実績 02", image: "https://i.postimg.cc/Qd3s4KXJ/e16c2656b4738b752a041d94d4e9bfd1.jpg", delay: 0.3 },
            { title: "設備・実績 03", image: "https://i.postimg.cc/nLVxZ89Z/fc5671e457877db58b97ea959d74e477.jpg", delay: 0.4 },
          ].map((slot, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: slot.delay }}
              className="relative h-[300px] border border-slate-200 bg-slate-100 group overflow-hidden"
            >
              <img 
                src={slot.image} 
                alt={slot.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90 mix-blend-multiply"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/5"></div>
              <div className="absolute bottom-4 left-4 bg-white/95 px-3 py-1.5 text-[10px] font-bold text-[#1B365D] tracking-widest uppercase shadow-sm">
                {slot.title}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
