import axios from "axios";

export function changeLanguage(lang) {
	return {
		type: "CHANGE_LANGUAGE",
		lang
	};
}

export function changeSince(param) {
	return {
		type: "CHANGE_SINCE",
		param
	};
}

export function fetchProjectsBegin() {
	return {
		type: "FETCH_PROJECTS_BEGIN"
	};
}

export function fetchProjectsSuccess(projects) {
	return {
		type: "FETCH_PROJECTS_SUCCESS",
		projects
	};
}

export function fetchProjectsError(error) {
	console.warn("Fetch projects error:");
	console.warn(error);
	return {
		type: "FETCH_PROJECTS_ERROR",
		error
	};
}

export function fetchProjects({ lang, since }) {
	let url = "https://github-trending-api.now.sh/repositories";
	const langParam = lang;
	const sinceParams = Object.keys(since)
		.map(el => {
			return since[el] ? el : null;
		})
		.filter(el => el)
		.join(",");

	if (langParam || sinceParams) {
		url +=
			"?" +
			[langParam ? "language=" + langParam : null, sinceParams ? "since=" + sinceParams : null]
				.filter(el => el)
				.join("&");
	}

	return dispatch => {
		dispatch(fetchProjectsBegin());
		return axios
			.get(url)
			.then(response => {
				dispatch(fetchProjectsSuccess(response.data));
				return response.data;
			})
			.catch(error => dispatch(fetchProjectsError(error)));
	};
}
