import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import TrendingKeywordsAll from "./pages/TrendingKeywordsAll";
import RelatedKeywordsAll from "./pages/RelatedKeywordsAll";
import routes from "tempo-routes";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending-all" element={<TrendingKeywordsAll />} />
        <Route path="/related-all" element={<RelatedKeywordsAll />} />
      </Routes>
      {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
    </Suspense>
  );
}

export default App;
