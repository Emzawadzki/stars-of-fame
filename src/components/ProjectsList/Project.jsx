import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
				<div className="project__head">
					<div className="project__cps-icon">
						<FontAwesomeIcon icon={["fas", "star"]} />
					</div>
					<div className="project__cps">
						<span className="hidden">Current period stars:</span>
						{project.currentPeriodStars}
					</div>
					<h3 className="project__name">{project.name}</h3>
					<p className="project__author">by {project.author}</p>
					<div className="project__stars">
						Overall stars: {project.stars}
						<span className="project__stars-icon">
							<FontAwesomeIcon icon={["fas", "star"]} />
						</span>
					</div>
					<div className="project__forks">
						Forks: {project.forks}
						<span className="project__forks-icon">
							<FontAwesomeIcon icon={["fas", "code-branch"]} />
						</span>
					</div>
				</div>
				{project.language ? (
					<div className="project__language" style={{ backgroundColor: project.languageColor }}>
						{project.language}
					</div>
				) : null}
			</div>
		</li>
	);
};

Project.propTypes = propTypes;

export default Project;
