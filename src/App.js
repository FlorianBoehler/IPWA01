import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainPage from "./pages/main";
import TablePage from "./pages/table";
import OverUsPage from "./pages/overus";
import KnowledgePage from "./pages/knowledge";
import LanguageButton from "./components/languageButton/LanguageButton";
import MainNavigation from "./components/mainNavigation/MainNavigation";
import "./App.css";

function App() {
  return (
    <div className="appContainer">
      <LanguageButton />
      <BrowserRouter>
        <MainNavigation />
        <div className="content">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/table" element={<TablePage />} />
            <Route path="/knowledge" element={<KnowledgePage />} />
            <Route path="/overus" element={<OverUsPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
