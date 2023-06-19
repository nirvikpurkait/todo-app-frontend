import { useContext } from "react";
import "./App.css";
import Body from "./components/Body";
import Theme, { getThemeDetails } from "./components/Theme";

function App() {
	const { darkTheme } = getThemeDetails();

	return (
		<div
			className={`App ${
				darkTheme ? `dark` : ""
			} w-full min-h-screen font-josefin-sans`}
		>
			<Body className={`w-full min-h-screen`}></Body>
		</div>
	);
}

export default App;
