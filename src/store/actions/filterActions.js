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
