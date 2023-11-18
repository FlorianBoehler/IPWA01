import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainPage from "./pages/main";
import TablePage from "./pages/table";
import OverUsPage from "./pages/overus";
import KnowledgePage from "./pages/knowledge";
import MainNavigation from "./components/mainNavigation/MainNavigation";
import LanguageButton from "./components/languagebutton/LanguageButton";

import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();
  return (
    <BrowserRouter>
      <LanguageButton />

      <MainNavigation />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/table" element={<TablePage />} />
        <Route path="/knowledge" element={<KnowledgePage />} />
        <Route path="/overus" element={<OverUsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
