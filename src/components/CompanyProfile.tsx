import { motion } from "motion/react";

export function CompanyProfile() {
  const companyInfo = [
    { label: "会社名", value: "早興業株式会社" },
    { label: "設立", value: "2019年" },
    { label: "所在地", value: "〒289-1115 千葉県八街市八街ほ945-82" },
    { label: "電話番号", value: "03-6657-8918" },
    { label: "FAX", value: "03-6657-8919" },
    { label: "営業時間", value: "10:00 - 18:00" },
    { label: "定休日", value: "土日祝" },
    { label: "事業内容", value: "中日国際定期航路事業、海上コンテナ輸送（LCL/FCL対応）、輸出入手続き代行など" }
  ];

  return (
    <section id="company" className="bg-[#F9FAFB] py-20 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.h4 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[10px] font-bold text-[#E63946] tracking-widest uppercase mb-4 flex items-center gap-2"
            >
              <span className="w-4 h-[1px] bg-[#E63946]"></span>
              COMPANY
            </motion.h4>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl font-extrabold text-[#1B365D] mb-8"
            >
              会社概要
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4 text-sm text-slate-600 leading-relaxed font-medium mb-12"
            >
              <p>早興業株式会社は、2019年に設立された、日本発・中国向け海上コンテナ輸送に特化した物流事業者です。</p>
              <p>同社は、中日国際定期航路を核に、週1便の定期コンテナ航路を運航。天津や香港などの主要港への直送サービスを提供しており、産業資材をはじめとする中古家具、家庭用品、中古磁器、日用品など、多岐にわたる貨物を安定的に中国市場へ届けています。</p>
              <p>自社船こそ保有しないものの、提携航路と厳選したコンテナスペースの確保により、顧客に対して「低価格・高頻度・柔軟な輸送」を実現。とりわけ、コンテナ1本分に満たない小口貨物（LCL）でもリーズナブルな料金設定を可能にしており、中小規模の輸出業者から高い評価を得ています。</p>
              <p>さらに、単なる運送業者にとどまらず、輸出入手続きの煩雑な書類作成や、各国の制限品目に該当しないかの事前確認などを一括代行。お客様は本来の商習慣に集中できる環境を提供しています。</p>
              <p>「迅速な納期」「誠実な経営」「専門的な対応」「安全な輸送」を4本の柱とし、アジア域内特有の港湾インフラ格差や需給予測の変動にも、臨機応変な航路手配と柔軟な積み合わせにより対応。お客様の「こんな貨物も安く出せないか」「面倒な手続きを減らせないか」という日常的なニーズに応えることこそが、早興業株式会社のコアバリューです。</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white border border-slate-200 p-8 shadow-sm"
            >
              {companyInfo.map((info, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row py-4 border-b border-slate-100 last:border-0 last:pb-0 first:pt-0">
                  <dt className="w-full sm:w-32 flex-shrink-0 text-sm font-bold text-[#1B365D] mb-1 sm:mb-0">
                    {info.label}
                  </dt>
                  <dd className="text-sm text-slate-600 leading-relaxed flex-1">
                    {info.value}
                  </dd>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="lg:col-span-5 hidden lg:block">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full h-full min-h-[600px] bg-slate-100 border border-slate-200 relative overflow-hidden group sticky top-24"
            >
              <img 
                src="https://placehold.co/800x1200/e2e8f0/64748b?text=Company+Exterior" 
                alt="会社外観"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 mix-blend-multiply opacity-80"
              />
              <div className="absolute bottom-4 left-4 bg-white/95 px-3 py-1.5 text-[10px] font-bold text-[#1B365D] tracking-widest uppercase shadow-sm">
                Image Slot: Company Exterior
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
