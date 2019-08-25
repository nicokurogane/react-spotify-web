import React from 'react';
import { Row, Col } from 'antd';
import ItemCard from '../../item-card/ItemCard';
import CustomLink from '../../custom-link/CustomLink';

import './list.scss';

const List = ({ albums }) => {
  return (
    <div className="album-list-container">
      <Row type="flex" justify="space-around">
        {albums.map(album => {
          const { id, name, artists, images } = album;

          return (
            <Col key={id}>
              <div className="item-content">
                <ItemCard
                  imageUrl={images[0].url}
                  title={name}
                  subtitle={artists[0].name}
                />
                <div className="overlay">
                  <CustomLink
                    targetUrl={`/album-detail/${id}`}
                    text={'Album Details'}
                  />
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default List;
