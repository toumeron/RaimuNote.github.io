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
      "短文も長文も、思いついた瞬間にライムノート。マークダウン対応で、こだわりの一篇もすぐ書ける。",
    tilt: "-rotate-2",
  },
  {
    emoji: "🍋",
    title: "ライム、で気持ちを伝える",
    description: "「いいね」じゃ足りない時に。ライムを贈って、書き手の心にビタミンを。",
    tilt: "rotate-1",
  },
  {
    emoji: "🌿",
    title: "やさしい設計のタイムライン",
    description: "アルゴリズムは控えめ、フォローした人の声がきちんと届く。あなたのための時間軸。",
    tilt: "-rotate-1",
  },
  {
    emoji: "🎨",
    title: "クリエイター応援機能",
    description: "投げ銭、メンバーシップ、有料ノート。表現で生きていく人を、しっかり後押し。",
    tilt: "rotate-2",
  },
  {
    emoji: "🛡️",
    title: "安心のモデレーション",
    description: "AIと人の目で24時間365日。誰もが心地よく過ごせる場所であるために。",
    tilt: "-rotate-2",
  },
  {
    emoji: "🌐",
    title: "12言語、世界とつながる",
    description: "自動翻訳でボーダレスに。あなたのノートが、海の向こうの誰かに届く。",
    tilt: "rotate-1",
  },
];
