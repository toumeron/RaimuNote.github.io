export type VideoItem = {
  id: string;          // YouTube video ID
  title: string;
  description: string;
};

// LimeNote 公式動画リスト(後から差し替え可能)
// 動画IDだけ書き換えればOKです。
export const videos: VideoItem[] = [
  {
    id: "OaFDqczqecI",
    title: "Lime2026",
    description: "LimeNoteの今後の経営方針をご紹介",
  },

];
