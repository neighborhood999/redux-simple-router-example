import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';

export default class SearchInput extends Component {
  static propTypes = {
    searchPhotoAction: PropTypes.func.isRequired,
    status: PropTypes.string.isRequired,
  };

  searchPhoto = event => {
    if (event.which === 13) {
      const keyword = findDOMNode(this.refs.keyword).value;
      this.props.searchPhotoAction(keyword);

      document.getElementById('header').style.animationPlayState = 'running';
    }
  }

  renderPending() {
    return (
      <h2 className="text-center" style={{ marginTop: '50px' }}>
        <i className="fa fa-refresh fa-spin"></i>
        {' '}Loading Image...
      </h2>
    );
  }

  render() {
    const { status } = this.props;

    return (
      status === 'PENDING' ?
        this.renderPending() :
        <div>
          <div className="form-group">
            <input
              onKeyDown={this.searchPhoto}
              type="text"
              ref="keyword"
              className="form-control input-lg"
              placeholder="請輸入你想找的圖片 + Enter..."
            />
          </div>
        </div>
    );
  }
}
