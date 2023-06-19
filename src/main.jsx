import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Theme from "./components/Theme";
import { env } from "./utils/env";

for (let key in env) {
	globalThis[key] = env[key];
}

ReactDOM.createRoot(document.getElementById("root")).render(
	<Theme>
		<App />
	</Theme>
);
