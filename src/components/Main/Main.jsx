import React, { Component } from "react";
import { connect } from "react-redux";

import Container from "../common/Container";
import ProjectsList from "../ProjectsList/ProjectsList";

class Main extends Component {
	render() {
		return (
			<main>
				<Container>
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
