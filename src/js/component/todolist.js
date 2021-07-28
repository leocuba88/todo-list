import React, { useState } from "react";

export function TodoList() {
	let [userInput, setUserInput] = useState("");
	let [todolist, setTodolist] = useState([
		"wash hands",
		"make your bed",
		"play piano"
	]);

	const handleKeyPress = event => {
		if (event.key === "Enter") {
			let newArr = [...todolist];
			newArr.push(userInput);
			setUserInput("");
			setTodolist(newArr);
		}
	};

	const deleteTodo = event => {
		let newArr = [...todolist];
		newArr.splice(event.target.value, 1);
		setUserInput("");
		setTodolist(newArr);
	};

	return (
		<div>
			<input
				type="text"
				id="first_name"
				value={userInput}
				onKeyDown={handleKeyPress}
				onChange={event => {
					setUserInput(event.target.value);
				}}></input>
			<ul>
				{todolist.map((task, i) => {
					return (
						<li key={i}>
							{task}{" "}
							<button value={i} onClick={deleteTodo}>
								X
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
