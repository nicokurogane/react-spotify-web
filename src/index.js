import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './components/App';

import Home from './components/pages/Home/Home';
import Login from './components/pages/Login/Login';

ReactDOM.render(
  <Router>
    <App>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/" exact component={Home} />
      </Switch>
    </App>
  </Router>,

  document.getElementById('root')
);
