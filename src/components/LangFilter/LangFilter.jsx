import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Select from "react-select";

import { changeLanguage } from "../../store/actions/projectActions";

const propTypes = {
	changeLanguage: PropTypes.func.isRequired,
	languages: PropTypes.array,
	activeLang: PropTypes.string
};

const LangFilter = ({ changeLanguage, languages = [], activeLang }) => {
	const handleChange = option => {
		changeLanguage(option.value);
	};
	
	const options = [
		{
			label: "All",
			value: ""
		},
		...languages.map(lang => {
			return {
				label: lang.name,
				value: lang.urlParam
			};
		})
	];

	const currentOption = options.find(option => option.value === activeLang);

	return (
		<label htmlFor="language" className="select">
			<span className="select__label">Language:</span>
			<Select
				name="language"
				onChange={handleChange}
				options={options}
				placeholder="Select language"
				value={currentOption}
				styles={{}}
			/>
		</label>
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
