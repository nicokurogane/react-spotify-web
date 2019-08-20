import React from 'react';
import LayoutApp from '../../layout-app/LayoutApp';

import './home.scss';
import spotifyLogo from '../../../assets/Spotify_logo_with_text.svg';

const Home = () => {
  return (
    <div className="home-container">
      <LayoutApp>
        <div className="home-content">
          <div className="panel">
            <img src={spotifyLogo} className="logo" alt="spotify logo" />
          </div>
          <div className="panel">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </LayoutApp>
    </div>
  );
};

export default Home;
