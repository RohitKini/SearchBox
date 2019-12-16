import React from "react";
import PropTypes from "prop-types";
import SearchComponent from "../SearchComponent/SearchComponent";

/**
 * class for dropdown component
 */
class Dropdown extends React.Component {
	/**
	 *
	 * @param props
	 * constuctor for class
	 */
	constructor(props) {
		super(props);
		this.child = React.createRef();
		this.state = {
			searchResult: []
		};
	}

	getSearchResult = (searchResultList) => {
		this.setState({ searchResult: searchResultList });
	};

	// eslint-disable-next-line require-jsdoc
	render() {
		const { searchResult } = this.state;
		const { cssStyle, dataset, searchkey, cssClass, iconAlign } = this.props;
		return (
			<div>
				<SearchComponent
					dataset={dataset}
					searchkey={searchkey}
					cssStyle={cssStyle}
					onChange={this.getSearchResult}
					cssClass={cssClass}
					iconAlign={iconAlign}
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

Dropdown.propTypes = {
	dataset  : PropTypes.arrayOf(PropTypes.objectOf).isRequired,
	searchkey: PropTypes.PropTypes.arrayOf(PropTypes.string).isRequired,
	cssClass : PropTypes.string,
	cssStyle : PropTypes.string,
	onChange : PropTypes.func,
	iconAlign: PropTypes.string
};

Dropdown.defaultProps = {
	cssStyle : "",
	onChange : "",
	iconAlign: 'left'
};

export default Dropdown;
