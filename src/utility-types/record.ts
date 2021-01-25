type Prefectures = 'Tokyo' | 'Osaka' | 'Nagoya';

type Covid19InfectionInfo = {
  kanji_name: string;
  confirmed_cases: number;
};

const Covid19Japan: Record<Prefectures, Covid19InfectionInfo> = {
  Tokyo: { kanji_name: '東京', confirmed_cases: 1960 },
  Osaka: { kanji_name: '大阪', confirmed_cases: 560 },
  Nagoya: { kanji_name: '名古屋', confirmed_cases: 423 },
  // Sapporo: { kanji_name: '札幌', confirmed_cases: 320 }, // Prefecturesに存在しない
};

export {};
