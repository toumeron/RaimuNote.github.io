export type ServiceItem = {
  emoji: string;
  title: string;
  description: string;
  tilt: string; // tailwind rotate class
};

export const services: ServiceItem[] = [
  {
    emoji: "📝",
    title: "サクッと書ける、ノート投稿",
    description:
      "短文も長文も、思いついた瞬間にライムノート。こだわりの一篇もすぐ書ける。",
    tilt: "-rotate-2",
  },
  {
    emoji: "🍋",
    title: "ライム、で気持ちを伝える",
    description: "投稿を通じて気持ちを伝えましょう",
    tilt: "rotate-1",
  },
  {
    emoji: "🌿",
    title: "タイムライン",
    description: "シンプルで見やすいです",
    tilt: "-rotate-1",
  },
  {
    emoji: "🎨",
    title: "クリエイター応援機能",
    description: "いいねでクリエイターを応援！",
    tilt: "rotate-2",
  },
  {
    emoji: "🛡️",
    title: "安心のモデレーション",
    description: "一ヶ月に一回はチェックするかもしれません...",
    tilt: "-rotate-2",
  },
  {
    emoji: "🌐",
    title: "1言語、日本中とつながる",
    description: "日本中の人と安心して繋がることができます",
    tilt: "rotate-1",
  },
];
