import React from 'react';
import { Row, Col } from 'antd';
import LayoutApp from '../../layout-app/LayoutApp';
import ItemCard from '../../item-card/ItemCard';

import { getAlbums } from '../../../data/network-utils/spotify/albums';

const Main = () => {
  return (
    <div className="main-page-container">
      <LayoutApp>
        <div>MAIN PAGE</div>
        <div>
          <Row>
            <Col span={6}>
              <ItemCard
                imageUrl="https://smhttp-ssl-73418.nexcesscdn.net/tech/en/wp-content/uploads/sites/2/2019/07/gorillaz-cover.jpg"
                title="Humanz"
                subtitle="Gorillaz"
              />
            </Col>

            <Col span={6}>
              <ItemCard
                imageUrl="https://www.24-horas.mx/wp-content/uploads/2019/02/levi-gorillaz-min.jpg"
                title="The NOW NOW"
                subtitle="Gorillaz"
              />
            </Col>
          </Row>
        </div>
      </LayoutApp>
    </div>
  );
};

//  getAlbums().then(response => console.log(response.data));

export default Main;
