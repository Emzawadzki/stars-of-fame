import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { changeLanguage } from "../../store/actions/projectActions";

const propTypes = {
	changeLanguage: PropTypes.func.isRequired,
	languages: PropTypes.array.isRequired,
	activeLang: PropTypes.string
};

const LangFilter = ({ changeLanguage, languages, activeLang }) => {
	const handleChange = e => {
		changeLanguage(e.target.value);
	};

	return (
		<select value={activeLang || ""} onChange={handleChange}>
			{languages.map(lang => (
				<option key={lang.urlParam} value={lang.urlParam}>
					{lang.name}
				</option>
			))}
			<option value="">ALL</option>
		</select>
	);
};

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
