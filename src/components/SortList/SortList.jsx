import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { changeSortBy } from "../../store/actions/projectActions";

const propTypes = {
	changeSortBy: PropTypes.func.isRequired,
	sortBy: PropTypes.string
};

const SortList = ({ changeSortBy, sortBy }) => {
	const handleChange = e => {
		changeSortBy(e.target.value);
	};

	return (
		<select name="sort-by" value={sortBy} onChange={handleChange}>
			<option value="">-</option>
			<option value="currentPeriodStars">currentPeriodStars</option>
			<option value="stars">stars</option>
			<option value="forks">forks</option>
		</select>
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
