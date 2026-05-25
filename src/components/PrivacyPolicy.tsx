import { motion } from "motion/react";

export function PrivacyPolicy() {
  return (
    <section className="bg-white py-20 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] font-bold text-[#E63946] tracking-widest uppercase mb-4 flex items-center gap-2"
          >
            <span className="w-4 h-[1px] bg-[#E63946]"></span>
            PRIVACY POLICY
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-3xl font-extrabold text-[#1B365D] mb-8"
          >
            プライバシーポリシー
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-[#F9FAFB] p-8 border border-slate-200"
          >
            <p className="text-sm font-bold text-slate-900 mb-6 leading-relaxed">
              早興業株式会社は、コンテナ情報の重要性を認識し、責任を持って以下のとおり情報を保護します。
            </p>
            <ol className="list-decimal pl-5 space-y-4 text-sm text-slate-600 leading-relaxed font-medium marker:text-[#1B365D] marker:font-bold">
              <li className="pl-2">個人情報保護法その他関係法令を遵守いたします。</li>
              <li className="pl-2">コンテナ情報は厳重に管理し、不正アクセス、紛失、改ざん、漏洩等に対する予防措置を講じます。</li>
              <li className="pl-2">コンテナ情報は法令による場合等を除き、お客様のご了承なく第三者に提供、開示致しません。</li>
              <li className="pl-2">早興業株式会社は、コンテナ情報の取り扱いに関して、有効かつ適性な運用が持続的になされるよう継続的な見直しと改善を図ってまいります。</li>
            </ol>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
