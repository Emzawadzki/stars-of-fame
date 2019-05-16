import React from "react";
import PropTypes from "prop-types";

const propTypes = {
	project: PropTypes.shape({
		author: PropTypes.string.isRequired,
		builtBy: PropTypes.arrayOf(
			PropTypes.shape({
				avatar: PropTypes.string.isRequired,
				href: PropTypes.string.isRequired,
				username: PropTypes.string.isRequired
			})
		).isRequired,
		currentPeriodStars: PropTypes.number.isRequired,
		description: PropTypes.string.isRequired,
		forks: PropTypes.number.isRequired,
		language: PropTypes.string,
		languageColor: PropTypes.string,
		name: PropTypes.string.isRequired,
		stars: PropTypes.number.isRequired,
		url: PropTypes.string.isRequired
	}).isRequired
};

const Project = props => {
	const project = props.project;

	return (
		<li className={`project${props.primary ? " project--primary" : ""}`}>
			<div className="project__inner">
				<div>Current period stars: {project.currentPeriodStars}</div>
				<div>Stars: {project.stars}</div>
				<div>Name: {project.name}</div>
				<div>Author: {project.author}</div>
				<div style={{ backgroundColor: project.languageColor }}>Lang: {project.language}</div>
			</div>
		</li>
	);
};

Project.propTypes = propTypes;

export default Project;
