/* eslint-disable require-jsdoc */
import React from "react";
import Dropdown from "./DropDown/Dropdown";
import "./App.css";
import NameArray from "./Resources/data.json";
import "./SearchComponent/component.css";

function App() {
	const searchIndex = ["id", "name"];
	const classes = "fontAwesome";
	return (
		<div className="App">
			<div className="main-content-div">
				<Dropdown
					dataset={NameArray}
					searchkey={searchIndex}
					cssStyle={{ "font-family": "FontAwesome" }}
					cssClass={classes}
					iconAlign="right"
				/>
			</div>
		</div>
	);
}

export default App;
