import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter,Route,Switch} from 'react-router-dom'
import App from './App';
import Vote from './vote'
import TestAPIRouter from './home'

ReactDOM.render(
  <HashRouter>
    <div className="main">
      <Route exact path="/" component={App}/>
      <Route exact path="/vote" component={Vote}/>
      <Route exact path="/home" component={TestAPIRouter}/>
    </div>
  </HashRouter>,
  document.getElementById('root')
);

