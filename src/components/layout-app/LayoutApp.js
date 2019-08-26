import React from 'react';
import { Layout } from 'antd';
import ProfileAvatar from '../user/profile-avatar/ProfileAvatar';

import spotifyLogo from '../../assets/Spotify_logo_with_text.svg';

import './layout.scss';

const { Header, Footer, Content } = Layout;

const LayoutApp = ({ children }) => {
  return (
    <div className="layout-container">
      <Layout className="main-container">
        <Header className="app-header">
          <div>
            <img src={spotifyLogo} className="header-logo" alt="header logo" />
          </div>
          <ProfileAvatar />
        </Header>
        <Content className="content">{children}</Content>
        <Footer className="app-footer">
          <div>
            <img src={spotifyLogo} className="footer-logo" alt="header logo" />
          </div>
          <div className="main-info">
            <div className="info">
              <span className="info-title">Company</span>
              <span>About</span>
              <span>Employee</span>
            </div>
            <div className="info">
              <span className="info-title">Comunities</span>
              <span>For artists</span>
              <span>Developers</span>
            </div>
            <div className="info">
              <span className="info-title">Useful Links</span>
              <span>Help</span>
              <span>Web Player</span>
            </div>
          </div>
          <div className="additional-link-container">
            <span className="addition-link">Legal</span>
            <span className="addition-link">Privacy Center</span>
            <span className="addition-link">Privacy Politic</span>
            <span className="addition-link">Cookies</span>
            <span className="addition-link">Abouts Ads</span>
          </div>
        </Footer>
      </Layout>
    </div>
  );
};

export default LayoutApp;
