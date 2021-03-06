import axios from "axios";

export function fetchLanguagesBegin() {
	return {
		type: "FETCH_LANGUAGES_BEGIN"
	};
}

export function fetchLanguagesSuccess(languages) {
	return {
		type: "FETCH_LANGUAGES_SUCCESS",
		languages
	};
}

export function fetchLanguagesError(error) {
	console.warn("Fetch languages error:");
	console.warn(error);
	return {
		type: "FETCH_LANGUAGES_ERROR",
		error
	};
}

export function fetchLanguages() {
	return dispatch => {
		dispatch(fetchLanguagesBegin());
		return axios
			.get("https://github-trending-api.now.sh/languages")
			.then(response => {
				if (response.status === 200 && response.data) {
					dispatch(fetchLanguagesSuccess(response.data));
				} else {
					throw Error("Fetching languages failed!");
				}
			})
			.catch(error => dispatch(fetchLanguagesError(error)));
	};
}
