import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter,Route,Switch} from 'react-router-dom'
import App from './App';
import Vote from './vote'

ReactDOM.render(
  <HashRouter>
    <div className="main">
      <Route exact path="/" component={App}/>
      <Route exact path="/vote" component={Vote}/>
    </div>
  </HashRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
