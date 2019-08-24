import React from 'react';
import { connect } from 'react-redux';
import { Avatar, Descriptions } from 'antd';
import TitleSection from '../../title-section/TitleSection';

import './detail.scss';

class ConnectedDetail extends React.Component {
  componentDidMount() {}

  renderLoadingState = () => {
    return <div>LOADING</div>;
  };

  renderLoadFailedState = () => {
    return <div>User could not be found!</div>;
  };

  renderUserInfo = () => {
    const {
      country,
      display_name,
      images = [],
      email,
      external_urls,
      product,
      followers
    } = this.props.user;
    return (
      <div className="user-detail-container">
        <TitleSection title="My Profile" />
        <div className="main-info section">
          {images.length > 0 ? (
            <Avatar src={images[0].url} size={200} />
          ) : (
            <Avatar icon="user" size={200} />
          )}
          <span className="display-name">{display_name}</span>
        </div>
        <div className="section">
          <Descriptions
            title=""
            className="test"
            column={{ xxl: 3, xl: 2, lg: 2, md: 2, sm: 1, xs: 1 }}
          >
            <Descriptions.Item label="Email">{email}</Descriptions.Item>

            <Descriptions.Item label="Country">{country}</Descriptions.Item>

            <Descriptions.Item label="Product">{product}</Descriptions.Item>
            <Descriptions.Item label="Followers">
              {followers.total}
            </Descriptions.Item>
            <Descriptions.Item label="Web url">
              <a
                href={external_urls.spotify}
                target="_blank"
                rel="noopener noreferrer"
              >
                {external_urls.spotify}
              </a>
            </Descriptions.Item>
          </Descriptions>
        </div>
      </div>
    );
  };

  render() {
    console.log(this.props.user);
    return (
      <>
        {Object.getOwnPropertyNames(this.props.user).length === 0
          ? this.renderLoadingState()
          : this.renderUserInfo()}
      </>
    );
  }
}

const mapStateToProps = state => ({
  user: state.users.selected
});

const Detail = connect(
  mapStateToProps,
  null
)(ConnectedDetail);

export default Detail;
