import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import spotifyReducers from './reducers';

import './index.css';
import App from './components/App';

import Home from './components/pages/Home/Home';
import Login from './components/pages/Login/Login';
import Main from './components/pages/Main/Main';
import AlbumDetail from './components/pages/AlbumDetail/AlbumDetail';
import ArtistDetail from './components/pages/ArtistDetail/ArtistDetail';

import 'antd/dist/antd.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  spotifyReducers,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App>
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/main" exact component={Main} />
          <Route path="/album-detail/:id" component={AlbumDetail} />
          <Route path="/artist-detail/:id" component={ArtistDetail} />
          <Route path="/" exact component={Home} />
        </Switch>
      </App>
    </Router>
  </Provider>,
  document.getElementById('root')
);
