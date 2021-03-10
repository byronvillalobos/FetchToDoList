import React, { useState, useEffect } from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/index.scss";

//create your first component
export function Home() {
	const [inputValue, setInputValue] = React.useState("");
	const [list, setlist] = React.useState([]);
	const validateTask = () => {
		if (inputValue === "") alert("No tasks, add a task");
	};
	let countItems = list.length;

	return (
		<div className="container text-center mt-5 d-flex justify-content-center">
			<div className="card col-6">
				<h5 className="card-title">To Do List </h5>
				<div className="input-group mb-4 col-12 justify-content-center">
					<input
						id="myInput"
						type="text"
						className="form-control"
						label="Task"
						placeholder="Type your task"
						onFocus={validateTask}
						onChange={e => {
							setInputValue(e.target.value);
						}}
						value={inputValue}
						onKeyPress={e => {
							if (e.key === "Enter") {
								setlist(list.concat(inputValue));
								setInputValue("");
							}
						}}
					/>
				</div>

				<div className="card-body text-left">
					{list.map((name, index) => (
						<li key={name} className="list-group-item">
							{name}{" "}
							<input
								type="checkbox"
								className="form-check-input item float-right"
							/>
						</li>
					))}
				</div>

				<div>
					<input
						className="btn btn-primary"
						type="reset"
						onClick={e => {
							setlist([]);
						}}
						value="Reset"></input>
					<input
						className="btn btn-primary"
						type="Submit"
						value="Submit"></input>
					<p>Total of tasks: {countItems}</p>
				</div>
			</div>
		</div>
	);
}
