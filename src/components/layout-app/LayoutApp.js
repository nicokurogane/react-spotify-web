import React from 'react';
import { Layout } from 'antd';
import './layout.scss';

const { Header, Footer, Content } = Layout;

const LayoutApp = ({ children }) => {
  return (
    <div className="layout-container">
      <Layout className="main-container">
        <Header className="app-header">Header</Header>
        <Content className="content">{children}</Content>
        <Footer className="app-footer">Footer</Footer>
      </Layout>
    </div>
  );
};

export default LayoutApp;
