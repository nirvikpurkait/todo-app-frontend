import React from "react";
import { getThemeDetails } from "./Theme";
import moon from "../assets/icon-moon.svg";
import sun from "../assets/icon-sun.svg";

const ThemeChangingButton = () => {
	const { darkTheme, setDarkTheme } = getThemeDetails();

	return (
		<button onClick={() => setDarkTheme(!darkTheme)}>
			<img src={darkTheme ? sun : moon} alt="" />
		</button>
	);
};

export default ThemeChangingButton;
