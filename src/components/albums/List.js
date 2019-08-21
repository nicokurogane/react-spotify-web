import React from 'react';
import { Row, Col } from 'antd';
import ItemCard from '../item-card/ItemCard';

const List = ({ albums }) => {
  console.log(albums);

  return (
    <div className="album-list-container">
      <Row>
        {albums.map(album => {
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
      </Row>
    </div>
  );
};

export default List;
