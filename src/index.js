import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Importing Bootstrap JavaScript and CSS for styling
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.min.css";

// Markup to be displayed while the app or components are loading
const loadingMarkup = (
  <div className="py-4 text-center">
    <h2>Loading...</h2>
  </div>
);

// Rendering the root of the React application
ReactDOM.render(
  // Suspense component used for handling the loading state of dynamically imported components
  <Suspense fallback={loadingMarkup}>
    <App/> {/* The main component of the application */}
  </Suspense>,
  document.getElementById("root") 
);
