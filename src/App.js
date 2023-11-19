import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";



import MainPage from "./pages/main";
import TablePage from "./pages/table";
import OverUsPage from "./pages/overus";
import KnowledgePage from "./pages/knowledge";
import LanguageButton from "./components/languagebutton/LanguageButton";
import MainNavigation from "./components/mainNavigation/MainNavigation";
import Background from "./components/background/Background";



function App() {
  
  return (
    <div className="appContainer">
      <div className="d-flex flex-column align-items-start"></div>
      <BrowserRouter>
        <LanguageButton />
        <MainNavigation />
        <Background />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/table" element={<TablePage />} />
          <Route path="/knowledge" element={<KnowledgePage />} />
          <Route path="/overus" element={<OverUsPage />} />
        </Routes>
      </BrowserRouter>{" "}
    </div>
  );
}

export default App;
