import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Select from "react-select";

import { changeSortBy } from "../../store/actions/projectActions";

const propTypes = {
	changeSortBy: PropTypes.func.isRequired,
	sortBy: PropTypes.string
};

const SortList = ({ changeSortBy, sortBy }) => {
	const handleChange = option => {
		changeSortBy(option.value);
	};

	const options = [
		{
			value: "",
			label: "none"
		},
		{
			value: "currentPeriodStars",
			label: "Current period stars"
		},
		{
			value: "stars",
			label: "Overall stars"
		},
		{
			value: "forks",
			label: "Forks"
		}
	];

	const currentOption = options.find(option => option.value === sortBy);

	return (
		<label htmlFor="sort-by" className="select">
			<span className="select__label">Sort by:</span>
			<Select
				className="select"
				classNamePrefix="select"
				name="sort-by"
				onChange={handleChange}
				options={options}
				placeholder="Sort by"
				value={currentOption}
			/>
		</label>
	);
};

SortList.propTypes = propTypes;

const mapStateToProps = ({ lang, proj }) => {
	return {
		sortBy: proj.sortBy
	};
};

const mapDispatchToProps = dispatch => {
	return {
		changeSortBy: property => dispatch(changeSortBy(property))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SortList);
