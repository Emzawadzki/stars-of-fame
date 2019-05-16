import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { changeSince } from "../../store/actions/projectActions";

const propTypes = {
	changeSince: PropTypes.func.isRequired,
	params: PropTypes.object.isRequired
};

class SinceFilter extends Component {
	handleChange = e => {
		this.props.changeSince(e.target.getAttribute("name"));
	};

	render() {
		const { params } = this.props;
		return (
			<div>
				{Object.keys(params).map(key => {
					return (
						<label htmlFor={key} key={key}>
							{key}
							<input
								type="checkbox"
								name={key}
								defaultChecked={params[key]}
								onChange={this.handleChange}
							/>
						</label>
					);
				})}
			</div>
		);
	}
}

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
