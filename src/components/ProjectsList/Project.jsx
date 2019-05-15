import React from "react";

const Project = props => {
	const project = props.project;

	return (
		<li className="project">
			<div>Stars: {project.stars}</div>
			<div>Author: {project.author}</div>
			<div>Name: {project.name}</div>
			<div>Lang: {project.language}</div>
		</li>
	);
};

export default Project;
