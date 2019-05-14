import React, { Component } from "react";
import { connect } from "react-redux";

import ProjectsList from "../ProjectsList/ProjectsList";

class Main extends Component {
	render() {
		return (
			<main>
				<ProjectsList projects={this.props.projects} />
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
