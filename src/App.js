import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainPage from "./pages/main";
import TablePage from "./pages/table";
import OverUsPage from "./pages/overus";
import KnowledgePage from "./pages/knowledge";
import MainNavigation from "./components/mainNavigation/MainNavigation";
import LanguageButton from "./components/languagebutton/languagebutton";

import classes from "./App.module.css"

import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();
  return (
    <BrowserRouter>
      <div className="appContainer">
        <div className="languageSettings">
          <LanguageButton />
        </div>
        <MainNavigation />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/table" element={<TablePage />} />
          <Route path="/knowledge" element={<KnowledgePage />} />
          <Route path="/overus" element={<OverUsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
