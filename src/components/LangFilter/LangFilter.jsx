import React, { Component } from "react";
import { connect } from "react-redux";

import { changeLanguage } from "../../store/actions/filterActions";

class LangFilter extends Component {
	handleChange = e => {
		this.props.changeLanguage(e.target.value);
	};

	render() {
		const { languages, activeLang } = this.props;

		return (
			<select value={activeLang} onChange={this.handleChange}>
				{languages.map(lang => {
					return (
						<option key={lang.urlParam} value={lang.urlParam}>
							{lang.name}
						</option>
					);
				})}
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

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(LangFilter);
