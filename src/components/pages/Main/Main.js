import React from 'react';
import { connect } from 'react-redux';
import { fetchAlbums, fetchAlbumsBySearchTerm } from '../../../actions/albums';
import LayoutApp from '../../layout-app/LayoutApp';
import AlbumList from '../../albums/List';

class ConnectedMain extends React.Component {
  componentDidMount() {
    // this.props.fetchAlbums();
    this.props.fetchAlbumsBySearchTerm('a');
  }

  render() {
    return (
      <div className="main-page-container">
        <LayoutApp>
          <div>MAIN PAGE</div>
          <div>
            <AlbumList albums={this.props.albums} />
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
  { fetchAlbums, fetchAlbumsBySearchTerm }
)(ConnectedMain);

export default Main;
