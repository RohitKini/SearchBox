/* eslint-disable require-jsdoc */
import React from "react";
import SearchComponent from "./Component/SearchComponent";
import "./App.css";

function App() {
	const nameArray = [
		{ id: 1, name: "rohit" },
		{ id: 2, name: "kailash" },
		{ id: 3, name: "prathamesh" },
		{ id: 4, name: "apporva" },
		{ id: 5, name: "minar" },
		{ id: 6, name: "amey" },
		{ id: 7, name: "amar" },
		{ id: 8, name: "samidha" },
		{ id: 9, name: "swati" },
		{ id: 10, name: "tanvi" },
		{ id: 11, name: "ankita" }
	];

	const searchIndex = ["id", "name"];

	return (
		<div className="App">
			<SearchComponent
				dataset={nameArray}
				searchkey={searchIndex}
				cssStyle={{
					width : "30%",
					height: "30px"
				}}
			/>
		</div>
	);
}

export default App;
