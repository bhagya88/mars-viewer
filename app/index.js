//import all dependencies
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import  rootReducer from './reducers/rootReducer';


// select the element from index.html where react app goes
const app = document.getElementById('mainHtml');

// creeate redux store to store state of application
const store = createStore(rootReducer, 
	composeWithDevTools(applyMiddleware(thunk))); // thunk is used in async actions

// initial render
ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>, app);
