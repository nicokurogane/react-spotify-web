import React from 'react';
import { Layout } from 'antd';
import ProfileAvatar from '../user/ProfileAvatar';

import './layout.scss';

const { Header, Footer, Content } = Layout;

const LayoutApp = ({ children }) => {
  return (
    <div className="layout-container">
      <Layout className="main-container">
        <Header className="app-header">
          <div>LOGO</div>
          <ProfileAvatar />
        </Header>
        <Content className="content">{children}</Content>
        <Footer className="app-footer">Footer</Footer>
      </Layout>
    </div>
  );
};

export default LayoutApp;
