import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { changeLanguage } from "../../store/actions/projectActions";

const propTypes = {
	changeLanguage: PropTypes.func.isRequired,
	languages: PropTypes.array.isRequired,
	activeLang: PropTypes.string
};

class LangFilter extends Component {
	handleChange = e => {
		this.props.changeLanguage(e.target.value);
	};

	render() {
		const { languages, activeLang } = this.props;

		return (
			<select value={activeLang || ""} onChange={this.handleChange}>
				{languages.map(lang => {
					return (
						<option key={lang.urlParam} value={lang.urlParam}>
							{lang.name}
						</option>
					);
				})}
				<option value="">ALL</option>
			</select>
		);
	}
}

const mapStateToProps = ({ lang, proj }) => {
	return {
		languages: lang.languages,
		activeLang: proj.urlParams.lang
	};
};

const mapDispatchToProps = dispatch => {
	return {
		changeLanguage: lang => dispatch(changeLanguage(lang))
	};
};

LangFilter.propTypes = propTypes;

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(LangFilter);
