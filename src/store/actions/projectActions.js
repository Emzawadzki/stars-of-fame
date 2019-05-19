import axios from "axios";

export function changeLanguageInterface(lang) {
	return {
		type: "CHANGE_LANGUAGE",
		lang
	};
}

export function changeLanguage(lang) {
	localStorage.setItem("projectsLanguage", lang);

	return (dispatch, getState) => {
		dispatch(changeLanguageInterface(lang));
		dispatch(fetchProjects(getState().proj.urlParams));
	};
}

export function changeSinceInterface(param) {
	return {
		type: "CHANGE_SINCE",
		param
	};
}

export function changeSince(param) {
	localStorage.setItem(`projectsSince_${param}`, !localStorage.getItem(`projectsSince_${param}` === "true"));

	return (dispatch, getState) => {
		dispatch(changeSinceInterface(param));
		dispatch(fetchProjects(getState().proj.urlParams));
	};
}

export function changeSortBy(property) {
	localStorage.setItem("projectsSortBy", property);

	return {
		type: "CHANGE_SORT_BY",
		property
	};
}

export function fetchProjectsBegin() {
	return {
		type: "FETCH_PROJECTS_BEGIN",
		loading: true
	};
}

export function fetchProjectsSuccess(projects) {
	return {
		type: "FETCH_PROJECTS_SUCCESS",
		projects,
		loading: false
	};
}

export function fetchProjectsError(error) {
	// @TODO: errors handling
	console.warn("Fetch projects error:");
	console.warn(error);
	return {
		type: "FETCH_PROJECTS_ERROR",
		error,
		loading: false
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
