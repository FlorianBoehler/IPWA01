import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Importing the page and layout components
import MainPage from "./pages/MainPage";
import TablePage from "./pages/TablePage.jsx";
import OverUsPage from "./pages/OverusPage.jsx";
import LanguageButton from "./components/languageButton/LanguageButton";
import MainNavigation from "./components/mainNavigation/MainNavigation";
import Footer from "./components/footer/Footer";
import "./App.css";
import "./components/i18next/i18n.js"; // Import for i18next configuration for internationalization

// Main App component
function App() {
  return (
    <div className="appContainer">
      {/* BrowserRouter for handling routing in the application */}
      <BrowserRouter>
        {/* Header section including language selection and navigation menu */}
        <div className="header">
          <LanguageButton /> 
          <MainNavigation /> 
        </div>

        {/* Main content area where different pages will be rendered based on the route */}
        <div className="content">
          <Routes>
            <Route path="/" element={<MainPage />} /> 
            <Route path="/table" element={<TablePage />} /> 
            <Route path="/overus" element={<OverUsPage />} /> 
          </Routes>
        </div>

        {/* Footer section with legal and other information */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
