import React from 'react';

import spotifyLogo from '../../../assets/Spotify_logo_with_text.svg';
import './login.scss';

const authEndpoint = 'https://accounts.spotify.com/authorize';

// Replace with your app's client ID, redirect URI and desired scopes
const clientId = 'eff204b0eda141e094cde9ad28d5fa34';
const redirectUri = 'http://localhost:3000/login';
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
      // Set token
      this.setState({
        token: _token
      });
    }
  }
  render() {
    console.log(process.env.REACT_APP_CLIENT_ID);
    return (
      <div className="login-container">
        <img src={spotifyLogo} alt="spotify" className="logo" />
        {!this.state.token && (
          <a
            className="btn btn--loginApp-link"
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
