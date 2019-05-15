import React, { Component } from "react";
import { connect } from "react-redux";

import { changeSince } from "../../store/actions/filterActions";

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

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SinceFilter);
