import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import Mobile from './mobile.js';
import * as serviceWorker from './serviceWorker';
import { createBrowserHistory } from "history";
import { HashRouter , Route } from "react-router-dom";
export const history = createBrowserHistory({
    basename: process.env.PUBLIC_URL
  });
  ReactDOM.render(<HashRouter basename={'/'}>
  <div>
    <Route exact path="/" component={App} />
    <Route exact path="/mobile" component={Mobile} />
  </div>
  </HashRouter>, document.getElementById('root'));
  
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
