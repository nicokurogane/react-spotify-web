import React from 'react';
import { connect } from 'react-redux';
import {
  fetchArtistById,
  fetchArtistTopTracks,
  fetchArtistRelatedArtist
} from '../../../actions/artists';
import GenresList from '../../artist/genres-list/GenresList';
import RelatedArtistList from '../../artist/related-artist-list/RelatedArtistsList';
import TopTracksList from '../../artist/top-tracks-list/TopTracksList';

import './artist-detail.scss';

class ConnectedArtistDetail extends React.Component {
  componentDidMount() {
    const {
      fetchArtistById,
      fetchArtistTopTracks,
      fetchArtistRelatedArtist
    } = this.props;

    const { id } = this.props.match.params;

    fetchArtistById(id);
    fetchArtistTopTracks(id);
    fetchArtistRelatedArtist(id);
  }

  render() {
    const { name, images = [], genres = [] } = this.props.selectedArtist;
    const { topTracks, relatedArtists } = this.props;
    return (
      <div className="artist-detail-container">
        <span>{name}</span>
        <span>
          {images.length > 0 ? <img src={images[1].url} alt={name} /> : null}
        </span>
        <div>
          top tracks:
          <TopTracksList tracks={topTracks} />
        </div>
        <GenresList genres={genres} />
        <RelatedArtistList artists={relatedArtists} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selectedArtist: state.artists.selected,
  topTracks: state.artists.selectedTopTracks,
  relatedArtists: state.artists.relatedArtists
});

const ArtistDetail = connect(
  mapStateToProps,
  { fetchArtistById, fetchArtistTopTracks, fetchArtistRelatedArtist }
)(ConnectedArtistDetail);

export default ArtistDetail;
