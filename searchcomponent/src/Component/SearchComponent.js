import React from "react";
import "./component.css";
import PropTypes from "prop-types";

/**
 * search class
 */
class SearchComponent extends React.Component {
	/**
	 * constructor
	 * @param {*} props
	 */
	constructor(props) {
		super(props);
		this.state = {
			searchResult: []
		};
	}

	searchValueChanged = (event) => {
		// console.log(event.target.value)
		const changedvalue = event.target.value;

		const pattern = new RegExp(`^${changedvalue}`);

		let finalSearchResult = [];
		let SearchResultCal = [];

		const { searchkey, dataset } = this.props;

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

		console.log(finalSearchResult);

		this.setState({ searchResult: finalSearchResult });
	};

	// eslint-disable-next-line require-jsdoc
	render() {
		const { searchResult } = this.state;
		const { cssClass, cssStyle } = this.props;
		// console.log(searchValue);
		return (
			<div className={cssClass} >
				<input
					list="suggest-box"
					type="text"
					onChange={this.searchValueChanged}
					style={cssStyle}
				/>

				<datalist id="suggest-box">
					{searchResult.map((item) => (
						<option key={item} value={item}>
							{item}
						</option>
					))}
				</datalist>
			</div>
		);
	}
}

SearchComponent.propTypes = {
	dataset  : PropTypes.arrayOf(PropTypes.objectOf).isRequired,
	searchkey: PropTypes.PropTypes.arrayOf(PropTypes.string).isRequired,
	cssClass : PropTypes.string,
	cssStyle : PropTypes.string
};

SearchComponent.defaultProps = {
	cssClass: "",
	cssStyle: ""
};
export default SearchComponent;
