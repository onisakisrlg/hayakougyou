import { Ship, Clock, ShieldCheck, Box, Anchor } from "lucide-react";

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const FEATURES: FeatureItem[] = [
  {
    id: "price",
    title: "圧倒的な価格競争力",
    description: "送料を安く、他社より競争力のある価格でご提供します。",
    icon: Anchor,
  },
  {
    id: "direct",
    title: "アジア全域への直接輸出",
    description: "アジアの国と地域に直接販売・輸出が可能です。",
    icon: Ship,
  },
  {
    id: "support",
    title: "まるっとお任せ",
    description: "制限品目の確認や面倒な書類作成などもすべて承ります。",
    icon: ShieldCheck,
  },
  {
    id: "flexible",
    title: "小口貨物にも対応",
    description: "コンテナ1本に満たない貨物でも、リーズナブルな海外輸送が可能です。",
    icon: Box,
  },
];

export const FAQS: FAQItem[] = [
  {
    question: "海外から海外、日本国内に荷物を送ることはできますか？",
    answer: "可能です。実績として「香港～天津」「アメリカ～香港」「アメリカ～天津」「日本～天津（多数）」などがあります。弊社大型な荷物の約1/3は海外～日本向けです。天津現地常駐スタッフや渡航スタッフが対応いたしますので、お問い合わせください。",
  },
  {
    question: "他社では断られてしまったのですが、どうしても発送したいんです。",
    answer: "弊社にて受託可能な案件がございましたら、内容を確認させていただきます。担当職員が対応し、内容確認から発送手配まで一貫して進めさせていただきます。",
  },
  {
    question: "書類の準備など煩雑な手配が必要そうですか？",
    answer: "弊社倉庫へのご搬入後、通関用書類の作成、通関手続きを弊社にて一貫して行わせていただきます。そのため、お客様ご自身で行っていただく作業は、貨物情報のご提示と弊社倉庫へのご搬入手配のみとなります。",
  },
];
