import { Building2, Phone, Printer, Clock } from "lucide-react";

export function ContactFooter() {
  return (
    <>
      <section id="contact" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h4 className="text-[10px] font-bold text-[#E63946] tracking-widest uppercase mb-4 flex items-center gap-2">
              <span className="w-4 h-[1px] bg-[#E63946]"></span>
              CONTACT US
            </h4>
            <h2 className="text-3xl font-extrabold text-[#1B365D] mb-6">お問い合わせ</h2>
            <p className="text-sm text-slate-500 mb-8 leading-relaxed max-w-md">
              貨物輸送についてのご相談、お見積りのご依頼など、お気軽にご連絡ください。専門スタッフが迅速に対応いたします。
            </p>
            
            <div className="space-y-6 text-sm text-slate-600">
              <div className="flex items-start gap-4">
                <Building2 className="w-5 h-5 text-slate-400 flex-shrink-0" />
                <div>
                  <p>〒289-1115</p>
                  <p>千葉県八街市八街ほ 94582</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-slate-400 flex-shrink-0" />
                <div>
                  <p>営業時間: 24時間営業</p>
                  <p>定休日: 年中無休</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="bg-[#F9FAFB] border border-slate-200 p-10">
              <h3 className="text-sm font-bold text-[#1B365D] mb-6 tracking-widest border-b border-slate-200 pb-4">
                HAYAKOUGYOU 株式会社
              </h3>
              <div className="space-y-6">
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">TEL</p>
                  <a href="tel:03-6657-8918" className="flex items-center gap-3 text-[#1B365D] hover:opacity-80 transition-opacity">
                    <Phone className="w-4 h-4 text-[#E63946]" />
                    <span className="text-2xl font-bold tracking-wider">03-6657-8918</span>
                  </a>
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">FAX</p>
                  <div className="flex items-center gap-3 text-slate-600">
                    <Printer className="w-4 h-4 text-slate-400" />
                    <span className="text-lg font-medium tracking-wider">03-6657-8919</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#1B365D] text-white px-6 md:px-10 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] tracking-widest font-medium">
        <div className="flex flex-wrap justify-center gap-6 uppercase opacity-70">
          <span>&copy; {new Date().getFullYear()} HAYAKOUGYOU CO., LTD.</span>
          <span className="hidden sm:inline">Safety & Reliability</span>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          <span className="hidden sm:inline">年中無休 / 24時間営業</span>
          <span>JAPAN - CHINA LINER SERVICE</span>
        </div>
      </footer>
    </>
  );
}
