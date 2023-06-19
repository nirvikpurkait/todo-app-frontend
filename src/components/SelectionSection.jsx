import React from "react";
import Navigation from "./Navigation";

const SelectionSection = () => {
	return (
		<>
			<div className="flex justify-between px-4">
				<button>5 items left</button>
				<span className="hidden sm:inline ">
					<Navigation></Navigation>
				</span>
				<button>Clear complete</button>
			</div>
		</>
	);
};

export default SelectionSection;
