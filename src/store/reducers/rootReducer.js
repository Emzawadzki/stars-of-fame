import { combineReducers } from "redux";

import languagesReducer from "./languagesReducer";
import projectsReducer from "./projectsReducer";

const rootReducer = combineReducers({
	lang: languagesReducer,
	proj: projectsReducer
});

export default rootReducer;