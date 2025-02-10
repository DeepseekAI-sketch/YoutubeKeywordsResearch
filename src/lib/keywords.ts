import { create } from "zustand";

type Language = "en" | "ar" | "fr" | "tr" | "it";

interface KeywordsState {
  language: Language;
  loading: boolean;
  trendingKeywords: Array<{ keyword: string; score: number }>;
  relatedKeywords: Array<{ keyword: string; score: number }>;
  setLanguage: (lang: Language) => void;
  analyzeKeyword: (text: string) => Promise<void>;
}

export const useKeywords = create<KeywordsState>()((set, get) => ({
  language: "en",
  loading: false,
  trendingKeywords: [],
  relatedKeywords: [],
  setLanguage: (language) => set({ language }),
  analyzeKeyword: async (text) => {
    if (!text) return;

    set({ loading: true });

    try {
      // Simulate API call with different results per language
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const state = get();
      const newTrendingKeywords = Array.from({ length: 300 }, (_, i) => ({
        keyword: `${text} ${state.language} trend ${i + 1}`,
        score: Math.floor(Math.random() * 30) + 70,
      }));

      const newRelatedKeywords = Array.from({ length: 300 }, (_, i) => ({
        keyword: `${text} ${state.language} related ${i + 1}`,
        score: Math.floor(Math.random() * 30) + 70,
      }));

      set({
        loading: false,
        trendingKeywords: newTrendingKeywords,
        relatedKeywords: newRelatedKeywords,
      });
    } catch (error) {
      console.error("Error analyzing keyword:", error);
      set({ loading: false });
    }
  },
}));
