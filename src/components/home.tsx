import React from "react";
import SearchSection from "./SearchSection";
import TrendingKeywordsGrid from "./TrendingKeywordsGrid";
import RelatedKeywordsGrid from "./RelatedKeywordsGrid";
import { useKeywords } from "@/lib/keywords";

const Home = () => {
  const { trendingKeywords, relatedKeywords } = useKeywords();
  console.log("Home render", { trendingKeywords, relatedKeywords });

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold">YouTube Keyword Research</h1>
          <p className="text-lg text-muted-foreground">
            Discover trending topics and optimize your videos for better reach
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <SearchSection />
          </div>
          <div className="lg:col-span-1">
            <TrendingKeywordsGrid keywords={trendingKeywords} />
          </div>
          <div className="lg:col-span-1">
            <RelatedKeywordsGrid keywords={relatedKeywords} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
