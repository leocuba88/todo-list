import React, { useState } from "react";

export function TodoList() {
	let [userInput, setUserInput] = useState("");
	let [todolist, setTodolist] = useState([
		"Wash hands",
		"Make your bed",
		"Practice piano"
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
		<div className="body">
			<h1>todos</h1>
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
						<div className="buttonAppear">
							<li className="item" key={i}>
								{task}{" "}
								<button
									className="textButton"
									value={i}
									onClick={deleteTodo}>
									X
								</button>
							</li>
						</div>
					);
				})}
			</ul>
		</div>
	);
}
