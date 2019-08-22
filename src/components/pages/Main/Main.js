import React from 'react';
import { connect } from 'react-redux';
import { fetchAlbums, fetchAlbumsBySearchTerm } from '../../../actions/albums';
import LayoutApp from '../../layout-app/LayoutApp';
import AlbumList from '../../albums/List';
import Paginator from '../../paginator/Paginator';

class ConnectedMain extends React.Component {
  componentDidMount() {
    this.props.fetchAlbumsBySearchTerm('a');
  }

  onChangeClick = offset => {
    this.props.fetchAlbumsBySearchTerm('a', offset);
  };

  render() {
    return (
      <div className="main-page-container">
        <LayoutApp>
          <div>
            <AlbumList albums={this.props.albums} />
          </div>
          <Paginator onChangeClick={this.onChangeClick} limit={20} />
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
