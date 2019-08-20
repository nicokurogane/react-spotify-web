import React from 'react';
import { Link } from 'react-router-dom';

import './custom-link.scss';

const CustomLink = ({ targetUrl, text }) => {
  return (
    <>
      <Link to={targetUrl} className="custom-link">
        {text}
      </Link>
    </>
  );
};

export default CustomLink;
