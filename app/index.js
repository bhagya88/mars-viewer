import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import  rootReducer from './reducers/rootReducer';


const app = document.getElementById('mainHtml');

const store = createStore(rootReducer, //defaultState);
	composeWithDevTools(applyMiddleware(thunk)));


ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>, app);
