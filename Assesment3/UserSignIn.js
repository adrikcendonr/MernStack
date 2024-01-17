import React from "react";
import * as ReactDOM from "react-dom/client";
import Success from "./Success";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(
    <React.StrictMode>
        <Success />
    </React.StrictMode>
);
