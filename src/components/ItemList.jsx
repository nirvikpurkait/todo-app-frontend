import { Checkbox } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { CheckedIcon, UncheCheckedIcon } from "./CheckBoxComp";
import cross from "../assets/icon-cross.svg";
import axios from "axios";
import { ItemListFromDatabase } from "./Body";

const ItemList = () => {
	const { itemList, setItemList } = useContext(ItemListFromDatabase);

	useEffect(() => {
		axios.get(`${baseUrl}/task-list`).then((res) => {
			setItemList((prev) => [...prev, ...res.data.taskList]);
		});
	}, []);

	return (
		<>
			<ul className="divide-y">
				{itemList.map((elem, index) => {
					console.log(elem);
					return (
						<li
							key={elem._id || index}
							className="flex items-center justify-between p-4 text-very-dark-grayish-blue dark:text-very-light-grayish-blue"
						>
							<div className="flex items-center justify-start gap-4">
								<Checkbox
									disableRipple={true}
									sx={{ padding: "0" }}
									className="text-xl"
									icon={<CheckedIcon />}
									checkedIcon={<UncheCheckedIcon />}
									defaultChecked={elem.completed}
								></Checkbox>

								<span className="text-xs text-light-grayish-blue">
									{elem.taskDetails}
								</span>
							</div>

							<button>
								<img
									src={cross}
									alt=""
									style={{ width: "1rem", height: "1rem" }}
								/>
							</button>
						</li>
					);
				})}

				{/* <li className="flex items-center justify-between p-4 text-very-dark-grayish-blue dark:text-very-light-grayish-blue">
					<div className="flex items-center justify-start gap-4">
						<Checkbox
							disableRipple={true}
							sx={{ padding: "0" }}
							className="text-xl"
							icon={<CheckedIcon />}
							checkedIcon={<UncheCheckedIcon />}
						></Checkbox>

						<span className="text-xs text-light-grayish-blue">
							fsdjkfdsnlfdsfdslfdsfndsj
						</span>
					</div>

					<button>
						<img
							src={cross}
							alt=""
							style={{ width: "1rem", height: "1rem" }}
						/>
					</button>
				</li> */}
			</ul>
		</>
	);
};

export default ItemList;
