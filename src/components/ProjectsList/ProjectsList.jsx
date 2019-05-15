import React from "react";

import Project from "./Project";

const ProjectsList = ({ projects }) => {
	return (
		<div className="projects-list">
			<h2 className="projects-list__title">Most starred projects</h2>
			<ul className="projects-list__list">
				{projects &&
					projects.map((project, i) => {
						return <Project key={i} project={project} />;
					})}
			</ul>
		</div>
	);
};

export default ProjectsList;
