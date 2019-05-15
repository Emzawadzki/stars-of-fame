import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchLanguages } from "../store/actions/langActions";

import Header from "../components/Header/Header";
import Main from "../components/Main/Main";

class App extends Component {
	componentDidMount() {
		this.props.fetchLanguages();
	}

	render() {
		console.log("render App");
		return (
			<div>
				<Header />
				<Main />
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		fetchLanguages: () => dispatch(fetchLanguages())
	};
};

export default connect(
	null,
	mapDispatchToProps
)(App);
