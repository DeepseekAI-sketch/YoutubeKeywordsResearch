import React from "react";
import { useKeywords } from "@/lib/keywords";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const TrendingKeywordsAll = () => {
  const { trendingKeywords } = useKeywords();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate("/")}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <h1 className="text-3xl font-bold">All Trending Keywords</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {trendingKeywords.length > 0 ? (
            trendingKeywords.map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-4 rounded-lg border bg-card"
              >
                <span className="text-base">{item.keyword}</span>
                <span className="bg-[#0F172A] text-white text-sm px-2 py-1 rounded">
                  {item.score}
                </span>
              </div>
            ))
          ) : (
            <p className="text-muted-foreground">
              No keywords analyzed yet. Try searching first.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TrendingKeywordsAll;
