import React from "react";
import PropTypes from "prop-types";

const propTypes = {
	loading: PropTypes.bool
};

const Container = ({ children, loading }) => (
	<div className={`container${loading ? " container--loading" : ""}`}>
		{children}
		{loading ? <div className="container__spinner" /> : null}
	</div>
);

Container.propTypes = propTypes;

export default Container;
