import React, { Suspense } from "react";
import ReactDOM from "react-dom";

import i18next from "./components/i18next/i18n.js";
import "./index.css";
import App from "./App";

import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.min.css";

const loadingMarkup = (
  <div className="py-4 text-center ">
    <h2>Loading...</h2>
  </div>
);

ReactDOM.render(
  <Suspense fallback={loadingMarkup}>
    <App/>
  </Suspense>,
  document.getElementById("root")
);
