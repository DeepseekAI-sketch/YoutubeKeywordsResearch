import React, { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useKeywords } from "@/lib/keywords";

const languages = [
  { value: "en", label: "English" },
  { value: "ar", label: "Arabic" },
  { value: "fr", label: "French" },
  { value: "tr", label: "Turkish" },
  { value: "it", label: "Italian" },
];

const SearchSection = () => {
  const [text, setText] = useState("");
  const {
    language,
    setLanguage,
    analyzeKeyword,
    loading,
    trendingKeywords,
    relatedKeywords,
  } = useKeywords();
  console.log("SearchSection state:", {
    language,
    loading,
    trendingKeywords,
    relatedKeywords,
  });
  console.log("SearchSection render", { language, loading });

  return (
    <div className="rounded-lg border bg-card p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Search className="w-5 h-5" />
          <h2 className="text-lg font-medium">Keyword Research</h2>
        </div>
        <Select value={language} onValueChange={setLanguage}>
          <SelectTrigger className="w-[140px]">
            <SelectValue placeholder="Select language" />
          </SelectTrigger>
          <SelectContent>
            {languages.map((lang) => (
              <SelectItem key={lang.value} value={lang.value}>
                {lang.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex gap-2">
        <Input
          type="text"
          placeholder="Enter keyword..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="flex-1"
        />
        <Button
          onClick={() => analyzeKeyword(text)}
          variant="default"
          disabled={loading}
        >
          {loading ? "Analyzing..." : "Analyze"}
        </Button>
      </div>
    </div>
  );
};

export default SearchSection;
