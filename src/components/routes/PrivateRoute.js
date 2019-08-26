import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import LocalStorageHandler from '../../data/local-storage-handler/LocalStorageHandler';

const ConnectedPrivateRoute = ({
  component: Component,
  loggedUser,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      Object.getOwnPropertyNames(loggedUser).length !== 0 ||
      LocalStorageHandler.getAuthToken() !== null ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

const mapStateToProps = state => ({
  loggedUser: state.users.selected
});

const PrivateRoute = connect(mapStateToProps)(ConnectedPrivateRoute);

export default PrivateRoute;
