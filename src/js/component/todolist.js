import React, { useState } from "react";

export function TodoList() {
	let todolist = ["wash hands", "make your bed", "play piano"];
	let [userInput, setUserInput] = React.useState("");

	const handleKeyPress = event => {
		if (event.key === "Enter") {
			todolist.push(userInput);
		}
	};

	return (
		<div>
			<input
				type="text"
				id="first_name"
				value={userInput}
				onKeyPress={handleKeyPress}
				onChange={event => {
					setUserInput(event.target.value);
				}}></input>
			<h1>{userInput}</h1>
			<ul>
				{todolist.map((task, i) => {
					return <li key={i}>{task}</li>;
				})}
			</ul>
		</div>
	);
}
