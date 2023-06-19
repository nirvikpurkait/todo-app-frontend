import React, { useContext, useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { CheckedIcon, UncheCheckedIcon } from "./CheckBoxComp";
import axios from "axios";
import { ItemListFromDatabase } from "./Body";

const InputField = () => {
	const [todoItem, setTodoItem] = useState({
		completed: false,
		taskDetails: "",
	});
	const { setItemList } = useContext(ItemListFromDatabase);

	const handleCheckboxChange = (e) => {
		setTodoItem((prev) => ({
			...prev,
			completed: e.target.checked,
		}));
	};

	const handleTextboxChange = (e) => {
		setTodoItem((prev) => ({
			...prev,
			taskDetails: e.target.value,
		}));
	};

	const pushTodo = () => {
		axios.post(`${baseUrl}/add-task`, todoItem).then(() => {
			setItemList((prev) => [...prev, todoItem]);
		});
	};

	return (
		<>
			<div className="flex items-center gap-4 text-sm sm:text-md">
				<Checkbox
					onChange={handleCheckboxChange}
					disableRipple={true}
					sx={{ padding: "0" }}
					className="text-xl"
					icon={<CheckedIcon />}
					checkedIcon={<UncheCheckedIcon />}
				></Checkbox>

				<input
					type="text"
					placeholder="Create a new todo..."
					onChange={handleTextboxChange}
					value={todoItem.taskDetails}
					className={` bg-transparent hover:outline-none focus:outline-none active:outline-none placeholder:text-[#8282824d] text-very-dark-grayish-blue dark:text-very-light-grayish-blue ${
						todoItem.completed &&
						todoItem.taskDetails.trim().length !== 0
							? `line-through`
							: ""
					}`}
				/>
			</div>
			<Button
				variant="outlined"
				disableRipple={true}
				disabled={
					todoItem.taskDetails.trim().length === 0 ? true : false
				}
				className="flex"
				onClick={pushTodo}
			>
				Add
			</Button>
		</>
	);
};

export default InputField;
