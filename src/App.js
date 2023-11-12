import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainPage from "./pages/main";
import TablePage from "./pages/table";
import OverUsPage from "./pages/overus";
import KnowledgePage from "./pages/knowledge";

function App() {
  return (
    <BrowserRouter>
      <div>
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
