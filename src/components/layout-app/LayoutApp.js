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
        <Footer className="app-footer">Footer</Footer>
      </Layout>
    </div>
  );
};

export default LayoutApp;
