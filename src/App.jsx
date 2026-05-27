import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import HowItWorksPage from "./pages/HowItWorksPageV5";
import ManifestoPage from "./pages/ManifestoPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/why-moi" element={<HowItWorksPage />} />
      <Route path="/how-it-works" element={<Navigate to="/why-moi" replace />} />
      <Route path="/manifesto" element={<ManifestoPage />} />
    </Routes>
  );
}
