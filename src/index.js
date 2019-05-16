import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

import * as serviceWorker from "./serviceWorker";
import "./styles/index.scss";

import { fetchLanguages } from "./store/actions/langActions";
import { fetchProjects } from "./store/actions/projectActions";

import rootReducer from "./store/reducers/rootReducer";
import App from "./components/App";

library.add(fas, fab);

const store = createStore(rootReducer, applyMiddleware(thunk));

store.dispatch(fetchLanguages()).then(store.dispatch(fetchProjects(store.getState().proj.urlParams)));

if (!localStorage.getItem("projectsLanguage")) {
	localStorage.setItem("projectsLanguage", store.getState().proj.urlParams.lang);
}
Object.keys(store.getState().proj.urlParams.since).forEach(el => {
	if (!localStorage.getItem("projectsSince_" + el)) {
		localStorage.setItem("projectsSince_" + el, store.getState().proj.urlParams.since[el]);
	}
});

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("app")
);

serviceWorker.unregister();
