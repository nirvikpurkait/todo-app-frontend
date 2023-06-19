import React from "react";

const CheckedIcon = () => {
	return (
		<>
			<i
				className="p-2 fa-regular fa-circle"
				style={{ color: "#8282824d" }}
			></i>
		</>
	);
};

const UncheCheckedIcon = () => {
	return (
		<>
			<i
				className="p-2 fa-solid fa-circle-check bg-clip-text"
				style={{
					color: "transparent",
					background: "linear-gradient(165deg, #4fdecd, #f044f3)",
					WebkitBackgroundClip: "text",
				}}
			></i>
		</>
	);
};

export { CheckedIcon, UncheCheckedIcon };
