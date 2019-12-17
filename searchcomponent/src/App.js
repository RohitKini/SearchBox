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
			
				<Dropdown
					dataset={NameArray}
					searchkey={searchIndex}
					cssStyle={{ "font-family": "FontAwesome" , "width":"80%"}}
					cssClass={classes}
					iconAlign="right"
				/>
				
		</div>
	);
}

export default App;
