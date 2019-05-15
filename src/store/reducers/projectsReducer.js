const initState = {
	projects: [
		{
			author: "hiroppy",
			name: "fusuma",
			url: "https://github.com/hiroppy/fusuma",
			description: "✍️Fusuma makes slides with Markdown easily.",
			language: "JavaScript",
			languageColor: "#f1e05a",
			stars: 2299,
			forks: 78,
			currentPeriodStars: 1914,
			builtBy: [
				{
					username: "hiroppy",
					href: "https://github.com/hiroppy",
					avatar: "https://avatars1.githubusercontent.com/u/3367801"
				},
				{
					username: "renovate-bot",
					href: "https://github.com/renovate-bot",
					avatar: "https://avatars1.githubusercontent.com/u/25180681"
				},
				{
					username: "karszawa",
					href: "https://github.com/karszawa",
					avatar: "https://avatars0.githubusercontent.com/u/1257695"
				},
				{
					username: "CraigHarley",
					href: "https://github.com/CraigHarley",
					avatar: "https://avatars3.githubusercontent.com/u/8432365"
				},
				{
					username: "jankeromnes",
					href: "https://github.com/jankeromnes",
					avatar: "https://avatars0.githubusercontent.com/u/599268"
				}
			]
		},
		{
			author: "GoogleChromeLabs",
			name: "comlink",
			url: "https://github.com/GoogleChromeLabs/comlink",
			description: "Comlink makes WebWorkers enjoyable.",
			language: "JavaScript",
			languageColor: "#f1e05a",
			stars: 3352,
			forks: 108,
			currentPeriodStars: 1401,
			builtBy: [
				{
					username: "surma",
					href: "https://github.com/surma",
					avatar: "https://avatars1.githubusercontent.com/u/234957"
				},
				{
					username: "renovate-bot",
					href: "https://github.com/renovate-bot",
					avatar: "https://avatars1.githubusercontent.com/u/25180681"
				},
				{
					username: "ronhe",
					href: "https://github.com/ronhe",
					avatar: "https://avatars0.githubusercontent.com/u/22715743"
				},
				{
					username: "felixfbecker",
					href: "https://github.com/felixfbecker",
					avatar: "https://avatars3.githubusercontent.com/u/10532611"
				}
			]
		},
		{
			author: "azl397985856",
			name: "leetcode",
			url: "https://github.com/azl397985856/leetcode",
			description:
				"LeetCode Solutions: A Record of My Problem Solving Journey.( leetcode题解，记录自己的leetcode解题之路。)",
			language: "JavaScript",
			languageColor: "#f1e05a",
			stars: 6101,
			forks: 900,
			currentPeriodStars: 998,
			builtBy: [
				{
					username: "azl397985856",
					href: "https://github.com/azl397985856",
					avatar: "https://avatars2.githubusercontent.com/u/12479470"
				},
				{
					username: "Songkeys",
					href: "https://github.com/Songkeys",
					avatar: "https://avatars0.githubusercontent.com/u/22665058"
				}
			]
		}
	],
	languages: [
		{ urlParam: "javascript", name: "JavaScript" },
		{ urlParam: "html+php", name: "HTML+PHP" },
		{ urlParam: "java", name: "Java" }
	],
	urlParams: {
		lang: "javascript",
		since: {
			daily: true,
			weekly: false,
			monthly: false
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

		default:
			return state;
	}
};

export default projectsReducer;
