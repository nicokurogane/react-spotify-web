import React from 'react';
import { Table } from 'antd';

import './top-tracks-list.scss';

const TopTracksList = ({ tracks }) => {
  const columns = [
    {
      title: 'track',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'popularity',
      dataIndex: 'popularity',
      key: 'popularity'
    }
  ];

  const data = tracks.map(track => {
    const { name, popularity } = track;
    return { name, popularity };
  });

  return (
    <div className="top-tracks-list-container">
      <Table columns={columns} dataSource={data} size="small" />
      {/*
   
    
      tracks.map(track => {
        const { name, popularity } = track;
        return (
          <div className="track">
            <span>{name}</span>
            <span>{popularity}</span>
          </div>
        );
      })*/}
    </div>
  );
};

export default TopTracksList;
