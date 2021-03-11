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
	const deletetask = index => {
		let newList = list;
		newList.splice(index, 1);
		console.log(newList);
		setlist([...newList]);
	};
	var url =
		"https://assets.breatheco.de/apis/fake/todos/user/byronvillalobos";

	useEffect(() => {
		var requestOptions2 = {
			method: "GET",
			redirect: "follow"
		};

		fetch(url, requestOptions2)
			.then(response => response.json())
			.then(data => {
				setlist(data);
			})
			.catch(error => console.log("error", error));
	}, []);

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
								let obj = {
									label: inputValue,
									done: true
								};
								setlist(list.concat(obj));
								setInputValue(obj);
							}
						}}
					/>
				</div>

				<div className="card-body">
					{list.map((name, index) => (
						<li key={name} className="list-group-item">
							{" "}
							<input
								type="checkbox"
								className="form-check-input item float-left"
								onClick={() => deletetask(index)}
							/>
							{name.label}
							{name.done}
						</li>
					))}
				</div>

				<div>
					<input
						className="btn btn-primary"
						type="reset"
						onClick={e => {
							setlist([]);
							var raw0 = "";
							var requestOptions0 = {
								method: "DELETE",
								body: raw0,
								redirect: "follow"
							};

							fetch(url, requestOptions0)
								.then(response => response.text())
								.then(result => console.log(result))
								.catch(error => console.log("error", error));
						}}
						value="Reset"></input>
					<input
						className="btn btn-primary"
						type="Submit"
						onClick={e => {
							var myHeaders = new Headers();
							myHeaders.append(
								"Content-Type",
								"application/json"
							);

							var json = JSON.stringify(list);

							var requestOptions = {
								method: "PUT",
								headers: myHeaders,
								body: json,
								redirect: "follow"
							};

							fetch(url, requestOptions)
								.then(response => response.text())
								.then(result => console.log(result))
								.catch(error => console.log("error", error));
						}}
						value="Submit"></input>
					<p>{countItems} tasks left</p>
				</div>
			</div>
		</div>
	);
}
