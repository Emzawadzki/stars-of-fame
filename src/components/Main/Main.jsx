import React, { Component } from "react";

import Container from "../common/Container";
import ProjectsList from "../ProjectsList/ProjectsList";
import LangFilter from "../LangFilter/LangFilter";
import SinceFilter from "../SinceFilter/SinceFilter";

class Main extends Component {
	render() {
		return (
			<main className="main">
				<Container>
					<h2 className="main__title">Most starred projects</h2>
					<LangFilter />
					<SinceFilter />
					<ProjectsList />
				</Container>
			</main>
		);
	}
}

export default Main;
