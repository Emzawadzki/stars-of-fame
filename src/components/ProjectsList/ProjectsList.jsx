import React from "react";

import Project from "./Project";

const ProjectsList = ({ projects }) => {
	return (
		<div>
			ProjectsList:
			{projects && projects.map((el, i) => {
				return <Project key={i} />;
			})}
		</div>
	);
};

export default ProjectsList;
