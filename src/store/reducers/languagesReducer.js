const initState = {
	loading: false,
	languages: [
		{ urlParam: "javascript", name: "JavaScript" },
		{ urlParam: "html+php", name: "HTML+PHP" },
		{ urlParam: "java", name: "Java" }
	]
};

const languagesReducer = (state = initState, action) => {
	console.log(state);

	switch (action.type) {
		case 'FETCH_LANGUAGES_BEGIN':
			return {
				...state,
				loading: true
			};

		case 'FETCH_LANGUAGES_SUCCESS':
			return {
				...state,
				loading: false,
				languages: action.languages
			};

		case 'FETCH_LANGUAGES_ERROR':
			return {
				...state,
				loading: false,
				error: action.error
			};

		default:
			return state;
	}
};

export default languagesReducer;
