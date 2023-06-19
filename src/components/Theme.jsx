import React, { createContext, useContext, useReducer, useState } from "react";

const ThemeContext = createContext();

const Theme = ({ children }) => {
	const [darkTheme, setDarkTheme] = useState(true);

	return (
		<>
			<ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
				{children}
			</ThemeContext.Provider>
		</>
	);
};

const getThemeDetails = () => useContext(ThemeContext);

export default Theme;
export { ThemeContext, getThemeDetails };
