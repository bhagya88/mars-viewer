//import all dependencies
import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from 'redux'; 
import thunk from 'redux-thunk'; // needed for async actions
import { composeWithDevTools } from 'redux-devtools-extension'; // needed for using redux dev tools in the brower
import { Provider } from 'react-redux'; // Provider provides store data to components

import App from "./components/App";
import  rootReducer from './reducers/rootReducer';


// select the element from index.html where react app goes
const app = document.getElementById('mainHtml');

// creeate redux store to store state of application
const store = createStore(rootReducer, 
	composeWithDevTools(applyMiddleware(thunk))); 

// initial render
ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>, app);
