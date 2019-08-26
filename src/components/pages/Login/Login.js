import React from 'react';
import LocalStorageHandler from '../../../data/local-storage-handler/LocalStorageHandler';

import spotifyLogo from '../../../assets/Spotify_logo_with_text.svg';
import './login.scss';

const authEndpoint = 'https://accounts.spotify.com/authorize';

// Replace with your app's client ID, redirect URI and desired scopes
const clientId = process.env.REACT_APP_CLIENT_ID;
const redirectUri = process.env.REACT_APP_REDIRECT_URI;
const scopes = [
  'user-top-read',
  'user-read-currently-playing',
  'user-read-playback-state',
  'user-read-private user-read-email'
];

// Get the hash of the url
const hash = window.location.hash
  .substring(1)
  .split('&')
  .reduce(function(initial, item) {
    if (item) {
      var parts = item.split('=');
      initial[parts[0]] = decodeURIComponent(parts[1]);
    }
    return initial;
  }, {});
window.location.hash = '';

class Login extends React.Component {
  state = {
    token: null
  };

  componentDidMount() {
    // Set token
    let _token = hash.access_token;
    if (_token) {
      console.log(this.props);
      console.log(`received token: ${_token}`);
      LocalStorageHandler.saveAuthToken(_token);
      this.props.history.push('/main');
      // Set token
      this.setState({
        token: _token
      });
    }
  }
  render() {
    return (
      <div className="login-container">
        <img src={spotifyLogo} alt="spotify" className="logo" />
        <p>Music for everyone</p>
        <p>Millons of songs. No credit card needed</p>
        {!this.state.token && (
          <a
            className="login-button"
            href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
              '%20'
            )}&response_type=token&show_dialog=true`}
          >
            Login to Spotify
          </a>
        )}
        {this.state.token && (
          // Spotify Player Will Go Here In the Next Step
          <span>LOGGED IN</span>
        )}
      </div>
    );
  }
}

export default Login;
