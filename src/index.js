import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import FilmProvider from "./stores/FilmProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <FilmProvider>
        <App />
    </FilmProvider>
);
