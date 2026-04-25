export type NewsItem = {
  date: string;
  category: string;
  title: string;
};

export const news: NewsItem[] = [
  {
    date: "2026.04.18",
    category: "プレスリリース",
    title: "LimeNote、月間アクティブユーザー2人を突破しました",
  },
  {
    date: "2026.03.30",
    category: "新機能",
    title: "「ライムボード」をリリース。気になるノートを集めて共有できます",
  },
  {
    date: "2026.03.05",
    category: "イベント",
    title: "年次ユーザーミートアップ「Lime Fes 2026」開催決定",
  },
  {
    date: "2026.02.14",
    category: "メディア",
    title: "代表インタビューが日経クロストレンドに掲載されました",
  },
];

export type CareerItem = {
  role: string;
  team: string;
  description: string;
  emoji: string;
};

export const careers: CareerItem[] = [
  {
    emoji: "💻",
    role: "ソフトウェアエンジニア",
    team: "Product / Platform",
    description: "TypeScript、Go、Kotlinでプロダクトの根幹を一緒に育ててくれる仲間を募集中。",
  },
  {
    emoji: "🎨",
    role: "プロダクトデザイナー",
    team: "Design",
    description: "「やさしい設計」を体現するUIを、リサーチからプロトタイプまで一気通貫で。",
  },
  {
    emoji: "🤝",
    role: "コミュニティマネージャー",
    team: "Community",
    description: "クリエイターとユーザーの声を聞き、LimeNoteの居心地を磨いていくお仕事です。",
  },
];
