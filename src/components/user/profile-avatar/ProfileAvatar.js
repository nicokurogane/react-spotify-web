import React from 'react';
import { connect } from 'react-redux';
import { fetchLoggedInUserInfo } from '../../../actions/users';
import { Avatar } from 'antd';
import HoverCard from '../../hover-card/HoverCard';

import './profile-avatar.scss';

class ConnectedProfileAvatar extends React.Component {
  state = {
    showCard: false
  };

  componentDidMount() {
    this.props.fetchLoggedInUserInfo();
  }

  onClickAvatar = () => {
    this.setState({
      showCard: !this.state.showCard
    });
  };

  render() {
    const { display_name, images = [], email } = this.props.user;
    return (
      <div className="profile-avatar-container">
        <button className="button-avatar" onClick={this.onClickAvatar}>
          {images.length > 0 ? (
            <Avatar src={images[0].url} size="default" />
          ) : (
            <Avatar icon="user" size="default" />
          )}
        </button>
        <HoverCard
          displayName={display_name}
          email={email}
          showCard={this.state.showCard}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.users.selected
});

const ProfileAvatar = connect(
  mapStateToProps,
  { fetchLoggedInUserInfo }
)(ConnectedProfileAvatar);

export default ProfileAvatar;
