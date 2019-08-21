import React from 'react';
import { connect } from 'react-redux';
import { fetchAlbums } from '../../../actions/albums';
import { Row, Col } from 'antd';
import LayoutApp from '../../layout-app/LayoutApp';
import ItemCard from '../../item-card/ItemCard';
import AlbumList from '../../albums/List';

class ConnectedMain extends React.Component {
  componentDidMount() {
    this.props.fetchAlbums();
  }

  render() {
    const { albums = [] } = this.props.albums;

    return (
      <div className="main-page-container">
        <LayoutApp>
          <div>MAIN PAGE</div>
          <div>
            <AlbumList albums={albums} />
          </div>
        </LayoutApp>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    albums: state.albums.list
  };
};

const Main = connect(
  mapStateToProps,
  { fetchAlbums }
)(ConnectedMain);

export default Main;
