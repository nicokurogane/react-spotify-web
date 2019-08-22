import React from 'react';
import { Row, Col } from 'antd';
import ItemCard from '../item-card/ItemCard';
import CustomLink from '../custom-link/CustomLink';

import './list.scss';

const List = ({ albums }) => {
  return (
    <div className="album-list-container">
      <Row>
        {albums.map(album => {
          const { id, name, artists, images } = album;

          return (
            <Col span={6} key={id}>
              <div className="item-content">
                <ItemCard
                  imageUrl={images[0].url}
                  title={name}
                  subtitle={artists[0].name}
                />
                <CustomLink
                  targetUrl={`/album-detail/${id}`}
                  text={'Details'}
                />
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default List;
