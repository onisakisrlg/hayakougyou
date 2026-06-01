import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, X } from "lucide-react";

type BusinessItem = {
  id: number;
  title: string;
  thumb: string;
  detailImage: string;
  summary: string;
  content: string[];
  features: string[];
};

const BUSINESS_ITEMS: BusinessItem[] = [
  {
    id: 1,
    title: "再生資源取扱・骨董品梱包・国内陸送",
    thumb: "https://i.postimg.cc/xdStLTtJ/2.jpg",
    detailImage: "https://i.postimg.cc/HWK0QkLr/7e33c64b024d0e7caccc0f858452250a.jpg",
    summary: "再生金属・再生プラスチックペレットの販売・仲介、骨董品の専用梱包、国内陸上輸送の手配など。",
    content: [
      "再生金属・再生プラスチックペレットの販売・仲介",
      "骨董品（磁器置物・家具・油絵）の専用梱包",
      "日本国内における陸上輸送の手配（最適ルート・運行管理）"
    ],
    features: [
      "美術品梱包：耐震・緩衝材を用いた丁寧な梱包",
      "国内陸送：コンテナ・トラック輸送の手配を迅速に",
      "環境商材：再生プラスチックペレットなど循環資源の取扱実績あり",
      "全作業工程（受入・選別・梱包・積み込み・積み替え等）"
    ]
  },
  {
    id: 2,
    title: "作業・サービス・特殊梱包・管理",
    thumb: "https://i.postimg.cc/Cx6fVvf4/10.jpg",
    detailImage: "https://i.postimg.cc/PrQm0z4v/8.jpg",
    summary: "見積書作成、輸出入書類確認、多言語対応、再生資源の受入・選別、美術品特殊梱包、防犯カメラによる厳重管理など。",
    content: [
      "見積書・納品書・請求書の発行",
      "輸入通関・輸出書類の確認（必要に応じて）",
      "取引先との日本語・中国語対応",
      "防犯カメラ録画・管理体制"
    ],
    features: [
      "取引先からの金属スクラップ及びプラスチック廃材の受入・目視選別",
      "再生資源の在庫管理及び出荷計画の立案",
      "磁器・陶器類：緩衝材（エアキャップ・ウレタン）を用いた二重梱包、木箱または強化ダンボールへの固定",
      "アンティーク家具：分解・保護シート被覆・角保護・専用ラッピング",
      "油絵：フレームごとの養生、耐衝撃パネルによるサンドイッチ梱包",
      "防犯カメラ記録された映像は厳重に保管し、お客様からの要請があった場合には速やかに該当箇所の映像を提供、これにより、商品のトレーサビリティ保証と不正・事故防止を徹底"
    ]
  },
  {
    id: 3,
    title: "提携物流会社・協力事業者",
    thumb: "https://i.postimg.cc/3xjbSv4Y/209a852311795be77562b2fb478b7301.jpg",
    detailImage: "https://i.postimg.cc/447G8WJs/16.jpg",
    summary: "京成工業株式会社および株式会社Z-AUTOと連携し、国内陸上輸送の安全・確実性を確保しております。",
    content: [
      "当社は、京成工業株式会社および株式会社Z-AUTOの2社を協力運送会社として連携し、国内陸上輸送の安全・確実性を確保しております。"
    ],
    features: [
      "両社とも当社の厳格な安全基準とコンプライアンスを満たした信頼ある提携先であり、再生金属・再生プラスチックペレットから骨董品・家具・油絵に至るまで、多様な貨物を丁寧かつ柔軟に配送いたします。なお、各社の所在地・連絡先などの詳細情報は取引先保護のため非公開とさせていただきます。"
    ]
  }
];

export function BusinessContent() {
  const [selectedItem, setSelectedItem] = useState<BusinessItem | null>(null);

  // Prevent scroll when modal is open
  if (typeof window !== 'undefined') {
    if (selectedItem) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }

  return (
    <section id="business" className="bg-white py-20 border-b border-slate-200 relative">
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
              輸出入業務および取り扱い商品についての詳細です。（※準備中の項目は資料に基づいて更新いたします）
            </motion.p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {BUSINESS_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.3 }}
              onClick={() => setSelectedItem(item)}
              className="group bg-[#F9FAFB] border border-slate-200 hover:border-[#1B365D] hover:shadow-lg transition-all duration-300 flex flex-col cursor-pointer"
            >
              <div className="h-48 bg-slate-200 border-b border-slate-200 relative overflow-hidden flex-shrink-0">
                <img 
                  src={item.thumb}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 mix-blend-multiply"
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="font-bold text-lg text-[#1B365D] mb-3">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-6 flex-1">
                  {item.summary}
                </p>
                <div className="flex items-center gap-2 text-[10px] font-bold text-[#E63946] tracking-widest uppercase mt-auto">
                  DETAILS <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
              onClick={() => setSelectedItem(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto flex flex-col md:flex-row shadow-2xl border-t-4 border-[#1B365D]"
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 p-2 bg-black/10 hover:bg-black/20 md:bg-white md:hover:bg-slate-100 rounded-full z-10 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 text-white md:text-slate-600" />
              </button>
              
              <div className="md:w-1/2 min-h-[250px] md:min-h-full relative bg-slate-100 border-r border-slate-200">
                <img 
                  src={selectedItem.detailImage} 
                  alt={selectedItem.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              
              <div className="md:w-1/2 p-8 lg:p-12 flex flex-col">
                <h3 className="text-2xl font-bold text-[#1B365D] mb-6 leading-tight pr-8">{selectedItem.title}</h3>
                
                {selectedItem.content.length > 0 ? (
                  <div className="space-y-8 flex-1">
                    <ul className="space-y-4">
                      {selectedItem.content.map((text, idx) => (
                        <li key={idx} className="flex gap-4 text-sm text-slate-700 leading-relaxed font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#E63946] flex-shrink-0 mt-2"></span>
                          {text}
                        </li>
                      ))}
                    </ul>
                    
                    {selectedItem.features.length > 0 && (
                      <div className="bg-[#F9FAFB] p-6 lg:p-8 border border-slate-200">
                        <h4 className="text-xs font-bold text-[#1B365D] mb-4 flex items-center gap-2 tracking-widest uppercase">
                          <span className="w-4 h-[1px] bg-[#E63946]"></span>
                          特徴
                        </h4>
                        <ul className="space-y-3">
                          {selectedItem.features.map((feature, idx) => {
                            const [label, ...rest] = feature.split('：');
                            const text = rest.join('：');
                            return (
                              <li key={idx} className="text-xs text-slate-600 leading-relaxed flex gap-3">
                                <span className="text-slate-400 mt-0.5">•</span>
                                <span>
                                  {text ? (
                                    <>
                                      <span className="font-bold text-slate-800">{label}：</span>
                                      {text}
                                    </>
                                  ) : (
                                    feature
                                  )}
                                </span>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    )}
                  </div>
                ) : (
                   <p className="text-slate-500 text-sm mt-4">{selectedItem.summary}</p>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
