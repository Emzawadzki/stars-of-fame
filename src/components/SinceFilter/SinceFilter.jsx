import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { changeSince } from "../../store/actions/projectActions";

const propTypes = {
	changeSince: PropTypes.func.isRequired,
	params: PropTypes.object.isRequired
};

const SinceFilter = ({ changeSince, params }) => {
	const handleChange = e => {
		changeSince(e.target.getAttribute("name"));
	};

	return (
		<div>
			{Object.keys(params).map(key => (
				<label htmlFor={key} key={key}>
					{key}
					<input type="checkbox" name={key} defaultChecked={params[key]} onChange={handleChange} />
				</label>
			))}
		</div>
	);
};

const mapStateToProps = ({ proj }) => {
	return {
		params: proj.urlParams.since
	};
};

const mapDispatchToProps = dispatch => {
	return {
		changeSince: param => dispatch(changeSince(param))
	};
};

SinceFilter.propTypes = propTypes;

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SinceFilter);
