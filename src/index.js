import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import "./index.scss";
import * as serviceWorker from "./serviceWorker";

import projectsReducer from "./reducers/projectsReducer";
import App from "./components/App";

const store = createStore(projectsReducer);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("app")
);

serviceWorker.unregister();
