import React from "react";
import { Card } from "@/components/ui/card";

interface KeywordItem {
  title: string;
  value: number;
}

interface KeywordDisplayProps {
  trendingKeywords?: KeywordItem[];
  relatedKeywords?: KeywordItem[];
}

const KeywordDisplay = ({
  trendingKeywords = [
    { title: "Trending Topic 1", value: 95 },
    { title: "Hot Topic 2", value: 88 },
    { title: "Popular Theme 3", value: 82 },
    { title: "Rising Topic 4", value: 78 },
  ],
  relatedKeywords = [
    { title: "Related Keyword 1", value: 92 },
    { title: "Similar Topic 2", value: 85 },
    { title: "Associated Term 3", value: 79 },
    { title: "Connected Theme 4", value: 75 },
  ],
}: KeywordDisplayProps) => {
  return (
    <div className="w-full space-y-8 bg-background p-6">
      <div>
        <h2 className="text-2xl font-bold mb-4">Trending Keywords</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {trendingKeywords.map((item, i) => (
            <Card key={i} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-primary">
                  {item.title}
                </h3>
                <div className="flex items-center">
                  <div className="h-2 w-24 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full"
                      style={{ width: `${item.value}%` }}
                    />
                  </div>
                  <span className="ml-3 text-sm font-medium">
                    {item.value}%
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Related Keywords</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {relatedKeywords.map((item, i) => (
            <Card key={i} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-primary">
                  {item.title}
                </h3>
                <div className="flex items-center">
                  <div className="h-2 w-24 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full"
                      style={{ width: `${item.value}%` }}
                    />
                  </div>
                  <span className="ml-3 text-sm font-medium">
                    {item.value}%
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeywordDisplay;
