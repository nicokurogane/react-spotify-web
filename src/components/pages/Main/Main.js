import React from 'react';
import { Row, Col } from 'antd';
import LayoutApp from '../../layout-app/LayoutApp';
import ItemCard from '../../item-card/ItemCard';

const Main = () => {
  return (
    <div className="main-page-container">
      <LayoutApp>
        <div>MAIN PAGE</div>
        <div>
          <ItemCard
            imageUrl="https://smhttp-ssl-73418.nexcesscdn.net/tech/en/wp-content/uploads/sites/2/2019/07/gorillaz-cover.jpg"
            title="Humanz"
            subtitle="Gorillaz"
          />

          {/*   <Col span={6}>
              <ItemCard
                imageUrl="https://www.24-horas.mx/wp-content/uploads/2019/02/levi-gorillaz-min.jpg"
                title="NOMBRE ARTISTA 2"
                subtitle="NOMBRE ALBUM 2"
              />
            </Col>*/}
        </div>
      </LayoutApp>
    </div>
  );
};

export default Main;
