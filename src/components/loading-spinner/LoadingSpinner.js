import React from 'react';

import loadingSpinner from '../../assets/spinner.svg';

const LoadingSpinner = ({ isLoading, className }) => {
  return (
    <div className="loading-spinner-container">
      <img
        src={loadingSpinner}
        alt="spinner"
        style={{
          opacity: isLoading ? '1' : '0'
        }}
        className={className}
      />
    </div>
  );
};

export default LoadingSpinner;
