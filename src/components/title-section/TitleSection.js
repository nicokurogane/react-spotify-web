import React from 'react';
import { Typography } from 'antd';

import './title-section.scss';

const { Title } = Typography;

const TitleSection = ({ title }) => {
  return (
    <div className="title-section-container">
      <Title level={2} className="title">
        {title}
      </Title>
    </div>
  );
};

export default TitleSection;
