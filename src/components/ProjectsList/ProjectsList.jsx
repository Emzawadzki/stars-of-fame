import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Project from "./Project";

const propTypes = {
	projects: PropTypes.array.isRequired,
	sortBy: PropTypes.string.isRequired
};

const ProjectsList = ({ projects, sortBy }) => {
	let sortedProjects = [...projects];

	if (sortBy) {
		sortedProjects.sort((a, b) => Number(b[sortBy]) - Number(a[sortBy]));
	}

	return (
		<ul className="projects-list">
			{sortedProjects.map((project, i) => (
				<Project key={i} primary={i === 0} project={project} />
			))}
		</ul>
	);
};

const mapStateToProps = ({ proj }) => {
	return {
		projects: proj.projects,
		sortBy: proj.sortBy
	};
};

ProjectsList.propTypes = propTypes;

export default connect(mapStateToProps)(ProjectsList);
