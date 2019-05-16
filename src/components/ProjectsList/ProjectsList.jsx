import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Project from "./Project";

const propTypes = {
	projects: PropTypes.array.isRequired
};

const ProjectsList = ({ projects }) => {
	return (
		<ul className="projects-list">
			{projects
				.sort((a, b) => Number(b.currentPeriodStars) - Number(a.currentPeriodStars))
				.map((project, i) => {
					return <Project key={i} primary={i === 0} project={project} />;
				})}
		</ul>
	);
};

const mapStateToProps = ({ proj }) => {
	return {
		projects: proj.projects
	};
};

ProjectsList.propTypes = propTypes;

export default connect(mapStateToProps)(ProjectsList);
