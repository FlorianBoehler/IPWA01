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
import  "./components/i18next/i18n.js"; //Call of i18next function to make the translation available in the app

function App() {
  return (
    <div className="appContainer">
      <BrowserRouter>
        {/*Header with the Button to change the language and the menu bar*/}
        <div className="header">
          <LanguageButton />
          <MainNavigation />
        </div>
        {/*Routing link informations for the different pages*/}
        <div className="content">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/table" element={<TablePage />} />
            <Route path="/overus" element={<OverUsPage />} />
          </Routes>
        </div>
        {/*Footer with legal notes*/}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
