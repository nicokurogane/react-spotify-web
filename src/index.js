import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import PrivateRoute from './components/routes/PrivateRoute';

import spotifyReducers from './reducers';

import './index.css';

import history from './history';

import App from './components/App';
import Login from './components/pages/Login/Login';
import Main from './components/pages/Main/Main';
import AlbumDetail from './components/pages/AlbumDetail/AlbumDetail';
import ArtistDetail from './components/pages/ArtistDetail/ArtistDetail';
import UserDetail from './components/pages/UserDetail/UserDetail';

import 'antd/dist/antd.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  spotifyReducers,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App>
        <Switch>
          <Route path="/login" exact component={Login} />
          <PrivateRoute path="/main" exact component={Main} />
          <PrivateRoute path="/album-detail/:id" component={AlbumDetail} />
          <PrivateRoute path="/artist-detail/:id" component={ArtistDetail} />
          <PrivateRoute path="/user-detail" component={UserDetail} />
          <Route path="/" exact component={Login} />
        </Switch>
      </App>
    </Router>
  </Provider>,
  document.getElementById('root')
);
