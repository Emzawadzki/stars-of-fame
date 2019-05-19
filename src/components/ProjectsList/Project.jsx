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

const Project = ({ project }) => {
	return (
		<li className="project">
			<div className="project__inner">
				<a className="project__url" href={project.url} target="_blank" rel="noopener noreferrer">
					<span className="hidden">See on github</span>
					<FontAwesomeIcon icon={["fab", "github"]} />
				</a>
				<div>
					<div className="project__cps-icon">
						<FontAwesomeIcon icon={["fas", "star"]} />
					</div>
					<div className="project__cps">
						<span className="hidden">Current period stars:</span>
						{project.currentPeriodStars}
					</div>
					<h3 className="project__name">{project.name}</h3>
					<p className="project__author">by {project.author}</p>
					<div className="project__property">
						Overall stars: {project.stars}
						<span className="project__property-icon project__property-icon--orange">
							<FontAwesomeIcon icon={["fas", "star"]} />
						</span>
					</div>
					<div className="project__property">
						Forks: {project.forks}
						<span className="project__property-icon">
							<FontAwesomeIcon icon={["fas", "code-branch"]} />
						</span>
					</div>
					<div className="project__description">{project.description}</div>
					<div className="project__contributors">
						Built by:
						<ul className="project__contributors-list">
							{project.builtBy.map((user, i) => (
								<li key={i}>
									<a
										className="project__contributor"
										href={user.href}
										target="_blank"
										rel="noopener noreferrer"
									>
										<img src={user.avatar} alt={user.username} />
									</a>
								</li>
							))}
						</ul>
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
