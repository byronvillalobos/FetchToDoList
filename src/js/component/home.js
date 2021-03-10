import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	let url =
		"https://assets.breatheco.de/apis/fake/todos/user/byronvillalobos";
	const [inputValue, setInputValue] = React.useState("");
	const [list, setlist] = React.useState([]);
	const validateTask = () => {
		if (inputValue === "") alert("No tasks, add a task");
	};
	let countItems = list.length;

	return (
		<div className="container mt-5 text-center">
			<div>
				<div>
					{" "}
					<h1>To Do List </h1>{" "}
				</div>

				<input
					id="myInput"
					type="text"
					label="Task"
					placeholder="input a value"
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
				<div className="border border-dark">
					<dl>
						{list.map(name => (
							<dt key={name}> {name} </dt>
						))}
					</dl>
				</div>

				<div>
					<input
						className="btn btn-primary"
						type="reset"
						onClick={e => {
							setlist([]);
							var raw = "";

							var requestOptions = {
								method: "DELETE",
								body: raw,
								redirect: "follow"
							};

							fetch(url, requestOptions)
								.then(response => response.text())
								.then(result => console.log(result))
								.catch(error => console.log("error", error));
						}}
						value="Reset"></input>
					<p>Total of tasks: {countItems}</p>
				</div>
			</div>
			<input
				className="btn btn-primary"
				type="Submit"
				onClick={e => {
					var myHeaders = new Headers();
					myHeaders.append("Content-Type", "application/json");

					var raw = JSON.stringify([
						{ label: "Make the bed", done: false },
						{ label: "Walk the dog", done: false },
						{ label: "Do the replits", done: false }
					]);

					var requestOptions = {
						method: "PUT",
						headers: myHeaders,
						body: raw,
						redirect: "follow"
					};

					fetch(url, requestOptions)
						.then(response => response.text())
						.then(result => console.log(result))
						.catch(error => console.log("error", error));
				}}
				value="Submit"></input>

			{/* for individual deletion https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array */}
		</div>
	);
}
