import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './components/App';

import Home from './components/pages/Home/Home';
import Login from './components/pages/Login/Login';
import Main from './components/pages/Main/Main';

import 'antd/dist/antd.css';

ReactDOM.render(
  <Router>
    <App>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/main" exact component={Main} />
        <Route path="/" exact component={Home} />
      </Switch>
    </App>
  </Router>,

  document.getElementById('root')
);
