import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import "./styles/index.scss";
import * as serviceWorker from "./serviceWorker";

import rootReducer from "./store/reducers/rootReducer";
import App from "./components/App";

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("app")
);

serviceWorker.unregister();
