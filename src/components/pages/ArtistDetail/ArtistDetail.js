import React from 'react';
import { connect } from 'react-redux';
import { fetchArtistById } from '../../../actions/artists';

import './artist-detail.scss';

class ConnectedArtistDetail extends React.Component {
  componentDidMount() {
    const { match, fetchArtistById } = this.props;
    fetchArtistById(match.params.id);
  }

  render() {
    const { name, images = [], genres = [] } = this.props.selectedArtist;
    return (
      <div className="artist-detail-container">
        <span>{name}</span>
        <span>
          {images.length > 0 ? <img src={images[0].url} alt={name} /> : null}
        </span>
        <div>
          genre:
          {genres.map(genre => (
            <span>{genre}</span>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedArtist: state.artists.selected
  };
};

const ArtistDetail = connect(
  mapStateToProps,
  { fetchArtistById }
)(ConnectedArtistDetail);

export default ArtistDetail;
