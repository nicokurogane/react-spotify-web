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
import TitleSection from '../../title-section/TitleSection';

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
        <TitleSection title={'Artist Detail'} />
        <div className="basic-info-container">
          <div>
            {images.length > 0 ? (
              <img src={images[1].url} alt={name} className="artist-img" />
            ) : null}
          </div>
          <div className="artist-info">
            <span>{name}</span>
            <GenresList genres={genres} />
            <TopTracksList tracks={topTracks} />
          </div>
        </div>

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
