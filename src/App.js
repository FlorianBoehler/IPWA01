import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//import MainPage from "./pages/main";
import MainPage from "./pages/MainPage";
import TablePage from "./pages/table";
import OverUsPage from "./pages/overus";
import LanguageButton from "./components/languageButton/LanguageButton";
import MainNavigation from "./components/mainNavigation/MainNavigation";
import Footer from "./components/footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="appContainer">
      <BrowserRouter>
        <div className="header">
          <LanguageButton />
          <MainNavigation />
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/table" element={<TablePage />} />
            <Route path="/overus" element={<OverUsPage />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
