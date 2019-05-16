const initState = {
	projects: [],
	urlParams: {
		lang: localStorage.getItem("projectsLanguage"),
		since: {
			daily: localStorage.getItem("projectsSince_daily") === "true",
			weekly: localStorage.getItem("projectsSince_weekly") === "true",
			monthly: localStorage.getItem("projectsSince_monthly") === "true"
		}
	}
};

const projectsReducer = (state = initState, action) => {
	switch (action.type) {
		case "CHANGE_LANGUAGE":
			return {
				...state,
				urlParams: {
					...state.urlParams,
					lang: action.lang
				}
			};

		case "CHANGE_SINCE":
			return {
				...state,
				urlParams: {
					...state.urlParams,
					since: {
						...state.urlParams.since,
						[action.param]: !state.urlParams.since[action.param]
					}
				}
			};

		case "FETCH_PROJECTS_BEGIN":
			return {
				...state,
				loading: true
			};

		case "FETCH_PROJECTS_SUCCESS":
			return {
				...state,
				projects: action.projects,
				loading: false
			};

		case "FETCH_PROJECTS_ERROR":
			return {
				...state,
				error: action.error,
				loading: false
			};

		default:
			return state;
	}
};

export default projectsReducer;
