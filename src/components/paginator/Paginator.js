import React from 'react';
import { Pagination } from 'antd';

import './paginator.scss';

class Paginator extends React.Component {
  state = {
    current: 1
  };

  onChange = page => {
    if (page === this.state.current) return;
    const { limit, onChangeClick } = this.props;
    const offset = limit * (page - 1);

    this.setState({
      current: page
    });
    onChangeClick(offset);
  };

  render() {
    return (
      <div className="paginator-container">
        <Pagination
          current={this.state.current}
          onChange={this.onChange}
          total={2000}
        />
      </div>
    );
  }
}

export default Paginator;
