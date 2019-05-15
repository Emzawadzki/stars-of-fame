import React, { Component } from "react";

import Container from "../common/Container";
import ProjectsList from "../ProjectsList/ProjectsList";
import LangFilter from "../LangFilter/LangFilter";
import SinceFilter from "../SinceFilter/SinceFilter";

class Main extends Component {
	render() {
		return (
			<main>
				<Container>
					<LangFilter />
					<SinceFilter />
					<ProjectsList />
				</Container>
			</main>
		);
	}
}

export default Main;
