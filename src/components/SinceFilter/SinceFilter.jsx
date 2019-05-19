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
		<div className="check-list">
			<span className="check-list__name">Projects since:</span>
			{Object.keys(params).map(key => (
				<div className="check-list__item" key={key}>
					<input
						className="check-list__input"
						type="checkbox"
						name={key}
						defaultChecked={params[key]}
						onChange={handleChange}
						id={`since-${key}`}
					/>
					<label className="check-list__label" htmlFor={`since-${key}`}>
						{key}
					</label>
				</div>
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
