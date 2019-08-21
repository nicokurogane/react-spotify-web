import React from 'react';
import { Col } from 'antd';
import ItemCard from '../item-card/ItemCard';

const List = ({ albums }) => {
  return (
    <div className="album-list-container">
      {albums.map(album => {
        console.log(album);
        const { name, artists, images } = album;
        return (
          <Col span={6} key={name}>
            <ItemCard
              imageUrl={images[0].url}
              title={name}
              subtitle={artists[0].name}
            />
          </Col>
        );
      })}
    </div>
  );
};

export default List;
