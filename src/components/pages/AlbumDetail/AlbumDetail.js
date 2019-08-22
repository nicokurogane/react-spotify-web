import React from 'react';
import { connect } from 'react-redux';
import { fetchAlbumDetailsById } from '../../../actions/albums';
import { Carousel } from 'antd';

import './album-detail.scss';

class ConnectedAlbumDetail extends React.Component {
  componentDidMount() {
    const { fetchAlbumDetailsById, match } = this.props;
    fetchAlbumDetailsById(match.params.id);
  }

  render() {
    const { images = [] } = this.props.album;
    return (
      <div className="album-detail-container">
        <div className="main-panel">
          <div>
            {images.length > 0 ? (
              <img src={images[0].url} alt="album" className="carousel-img" />
            ) : null}
          </div>
        </div>
        <div className="tracklist-panel">tracklist</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  album: state.albums.selected
});

const AlbumDetail = connect(
  mapStateToProps,
  { fetchAlbumDetailsById }
)(ConnectedAlbumDetail);

export default AlbumDetail;
