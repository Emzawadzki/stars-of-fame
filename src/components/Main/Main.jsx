import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Container from "../common/Container";
import ProjectsList from "../ProjectsList/ProjectsList";
import LangFilter from "../LangFilter/LangFilter";
import SinceFilter from "../SinceFilter/SinceFilter";
import SortList from "../SortList/SortList";

const propTypes = {
	loading: PropTypes.bool.isRequired
};

const Main = ({ loading }) => {
	return (
		<main className="main">
			<Container>
				<h2 className="main__title">Most starred projects</h2>
				<div className="main__filters">
					<div className="main__filter">
						<LangFilter />
					</div>
					<div className="main__filter">
						<SortList />
					</div>
					<div className="main__filter main__filter--wide">
						<SinceFilter />
					</div>
				</div>
			</Container>
			<Container loading={loading}>
				<ProjectsList />
			</Container>
		</main>
	);
};

const mapStateToProps = ({ proj }) => {
	return {
		loading: proj.loading
	};
};

Main.propTypes = propTypes;

export default connect(mapStateToProps)(Main);
