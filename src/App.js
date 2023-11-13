import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainPage from "./pages/main";
import TablePage from "./pages/table";
import OverUsPage from "./pages/overus";
import KnowledgePage from "./pages/knowledge";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
  return (
    
    <BrowserRouter>
      <div>
      <MainNavigation />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/table" element={<TablePage />} />
          <Route path="/overus" element={<OverUsPage />} />
          <Route path="/knowledge" element={<KnowledgePage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
