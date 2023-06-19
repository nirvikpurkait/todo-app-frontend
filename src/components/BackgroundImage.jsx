import React from "react";
import lightBgLg from "../assets/bg-desktop-light.jpg";
import darkBgLg from "../assets/bg-desktop-dark.jpg";
import lightBgSm from "../assets/bg-mobile-light.jpg";
import darkBgSm from "../assets/bg-mobile-dark.jpg";
import { getThemeDetails } from "./Theme";

const BackgroundImage = ({ className }) => {
	const { darkTheme } = getThemeDetails();

	return (
		<div className={className}>
			<img
				src={`${darkTheme ? darkBgSm : lightBgSm}`}
				alt=""
				className={`block xs:hidden w-full`}
			/>
			<img
				src={`${darkTheme ? darkBgLg : lightBgLg}`}
				alt=""
				className={`hidden xs:block w-full`}
			/>
		</div>
	);
};

export default BackgroundImage;
