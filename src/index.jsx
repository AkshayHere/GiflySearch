import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import registerServiceWorker from "./registerServiceWorker";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App tab="home" />);

registerServiceWorker();
