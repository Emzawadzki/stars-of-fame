const initState = {
	loading: false,
	error: null,
	languages: []
};

const languagesReducer = (state = initState, action) => {
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
