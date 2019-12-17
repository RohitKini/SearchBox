import React, { Fragment } from "react";
import "./component.css";
import PropTypes from "prop-types";
import SearchImage2 from "../Resources/images/search2.png";
import "font-awesome/css/font-awesome.min.css"
// import SearchIcon from "";
/**
 * search class
 */
class SearchComponent extends React.Component {
	searchValueChanged = (event) => {
		// console.log(event.target.value)
		const changedvalue = event.target.value;

		const pattern = new RegExp(`^${changedvalue}`);

		let finalSearchResult = [];
		let SearchResultCal = [];

		const { searchkey, dataset, onChange } = this.props;

		// eslint-disable-next-line react/prop-types
		searchkey.forEach((indexkey) => {
			SearchResultCal = dataset.filter((singleitem) => {
				return pattern.test(singleitem[indexkey].toString().toLowerCase());
			});

			SearchResultCal = SearchResultCal.map((matchitem) => {
				return matchitem[indexkey];
			});

			// console.log(SearchResultCal);
			finalSearchResult = finalSearchResult.concat(SearchResultCal);
		});

		if (changedvalue === "") {
			finalSearchResult = [];
		}

		onChange(finalSearchResult);
	};

	// eslint-disable-next-line require-jsdoc
	render() {
		const { cssClass, cssStyle, iconAlign } = this.props;
		let cssClassNames = "left-border-disabled ";
		if (iconAlign === "right") {
			cssClassNames = "right-border-disabled ";
		}
		cssClassNames += cssClass;
		return (
			<Fragment>
				
				{iconAlign === "left" ? (
					<div id="button-holder-left">
						<i class="fa fa-search" aria-hidden="true"></i>
						{/* <img src={SearchImage2} alt="search" /> */}
					</div>
				) : (
					""
				)}

				<input
					type="text"
					placeholder="Search..."
					id="search-text-input"
					list="suggest-box"
					onChange={this.searchValueChanged}
					style={cssStyle}
					className={cssClassNames}
				/>

				{iconAlign === "right" ? (
					<div id="button-holder">
						<i class="fa fa-search" aria-hidden="true"></i>
						{/*  <img src={SearchImage2} alt="search" /> */}
					</div>
				) : (
					""
				)}
			</Fragment>
		);
	}
}

SearchComponent.propTypes = {
	dataset  : PropTypes.arrayOf(PropTypes.objectOf).isRequired,
	searchkey: PropTypes.PropTypes.arrayOf(PropTypes.string).isRequired,
	cssClass : PropTypes.string,
	cssStyle : PropTypes.string,
	onChange : PropTypes.func,
	iconAlign: PropTypes.string
};

SearchComponent.defaultProps = {
	cssClass : "",
	cssStyle : "",
	onChange : "",
	iconAlign: "left"
};

export default SearchComponent;
