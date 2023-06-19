import React, { createContext, useState } from "react";
import ThemeChangingButton from "./ThemeChangingButton";
import BackgroundImage from "./BackgroundImage";
import InputField from "./InputField";
import ItemList from "./ItemList";
import SelectionSection from "./SelectionSection";
import Navigation from "./Navigation";

export const ItemListFromDatabase = createContext();

const Body = ({ className }) => {
	const [itemList, setItemList] = useState([]);

	return (
		<ItemListFromDatabase.Provider value={{ itemList, setItemList }}>
			<div
				className={`bg-very-light-gray dark:bg-very-dark-blue relative ${className}`}
			>
				{/* background image start */}
				<BackgroundImage
					className={`absolute w-full`}
				></BackgroundImage>
				{/* background image end */}

				{/* content start */}
				<div className=" p-6 m-auto relative z-[1] top-[5vw] left-0 flex flex-col w-full max-w-[35rem] h-max">
					{/* heading start */}
					<div className="text-[1.6rem] md:text-[2rem] lg:text-[2.5rem] flex items-center justify-between w-full">
						<div className="tracking-[1rem] text-very-light-gray">
							TODO
						</div>
						<ThemeChangingButton></ThemeChangingButton>
					</div>
					{/* heading end */}

					{/* input field start */}
					<div className="flex justify-between w-full px-4 py-2 mt-[2rem] rounded-md bg-very-light-gray dark:bg-very-dark-desaturated-blue">
						<InputField></InputField>
					</div>
					{/* input field end */}

					{/* data section start */}
					<div
						className={`mt-4 rounded-md bg-very-light-gray dark:bg-very-dark-desaturated-blue`}
					>
						<div className="">
							<ItemList></ItemList>
						</div>
						<div className="text-[0.8rem] text-light-grayish-blue dark:text-very-dark-grayish-blue">
							<SelectionSection></SelectionSection>
						</div>
					</div>
					<div className="flex items-center justify-between px-16 py-4 mt-4 rounded-md text-light-grayish-blue dark:bg-very-dark-desaturated-blue sm:hidden dark:text-very-dark-grayish-blue">
						<Navigation></Navigation>
					</div>
					{/* data section end */}
				</div>
				{/* content end */}
			</div>
		</ItemListFromDatabase.Provider>
	);
};

export default Body;
