import React, { Component } from "react";
import { connect } from "react-redux";

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
					<ProjectsList projects={this.props.projects} />
				</Container>
			</main>
		);
	}
}

const mapStateToProps = state => {
	return {
		projects: state.projects
	};
};

export default connect(mapStateToProps)(Main);
