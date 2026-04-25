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
    title: "追加予定",
  },
  {
    date: "2026.03.05",
    category: "イベント",
    title: "Lime2026を開催しました。",
  },
  {
    date: "2026.02.14",
    category: "メディア",
    title: "福岡県にて寝ました",
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
    description: "TypeScript、Go、Kotlinでプロダクトの根幹を一緒に育ててくれる仲間を募集していません",
  },
  {
    emoji: "🎨",
    role: "プロダクトデザイナー",
    team: "Design",
    description: "募集していません",
  },
  {
    emoji: "🤝",
    role: "コミュニティマネージャー",
    team: "Community",
    description: "募集していません",
  },
];
