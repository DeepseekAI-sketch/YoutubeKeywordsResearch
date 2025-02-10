import React from "react";
import { useKeywords } from "@/lib/keywords";
import TrendingKeywordsGrid from "./TrendingKeywordsGrid";
import RelatedKeywordsGrid from "./RelatedKeywordsGrid";

const ResultsSection = () => {
  const { trendingKeywords, relatedKeywords } = useKeywords();
  console.log("ResultsSection render", {
    trendingKeywords: trendingKeywords.length,
    relatedKeywords: relatedKeywords.length,
  });
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-4">Trending Keywords</h2>
        <TrendingKeywordsGrid keywords={trendingKeywords} />
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-4">Related Keywords</h2>
        <RelatedKeywordsGrid keywords={relatedKeywords} />
      </div>
    </div>
  );
};

export default ResultsSection;
