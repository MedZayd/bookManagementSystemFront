import React from "react";
import ReactDOM from "react-dom";
import "react-perfect-scrollbar/dist/css/styles.css";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";

import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./app/reducers";
import rootSaga from "./app/sagas";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
	reducer: rootReducer,
	middleware: [...getDefaultMiddleware(), sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

ReactDOM.render(
	<React.StrictMode>
		<I18nextProvider i18n={i18n}>
			<Provider store={store}>
				<Router>
					<App />
				</Router>
			</Provider>
		</I18nextProvider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
