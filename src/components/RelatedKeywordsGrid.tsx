import React from "react";
import { Link } from "lucide-react";

interface RelatedKeyword {
  keyword: string;
  score: number;
}

interface Props {
  keywords?: RelatedKeyword[];
}

const RelatedKeywordsGrid = ({ keywords = [] }: Props) => {
  return (
    <div className="rounded-lg border bg-card p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Link className="w-5 h-5" />
          <h2 className="text-lg font-medium">Related Keywords</h2>
        </div>
        {keywords.length > 4 && (
          <button
            onClick={() => (window.location.href = "/related-all")}
            className="text-sm font-medium hover:underline"
          >
            View All ({keywords.length}) →
          </button>
        )}
      </div>

      <div className="space-y-4">
        {keywords.slice(0, 4).map((item, i) => (
          <div key={i} className="flex items-center justify-between">
            <span className="text-base">{item.keyword}</span>
            <span className="bg-[#0F172A] text-white text-sm px-2 py-1 rounded">
              {item.score}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedKeywordsGrid;
