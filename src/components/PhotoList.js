import React, { Component, PropTypes } from 'react';

export default class PhotoList extends Component {
  static propTypes = {
    searchNextPageAction: PropTypes.func.isRequired,
    photos: PropTypes.array.isRequired,
    status: PropTypes.string.isRequired,
  };

  renderLoadButton() {
    const { searchNextPageAction } = this.props;

    return (
      <div style={{ marginBottom: '20px' }} className="row">
        <div className="col-md-6 col-md-offset-3">
          <button
            type="button"
            onClick={searchNextPageAction}
            className="btn btn-default btn-lg btn-block"
          >
            載入更多圖片...
          </button>
        </div>
      </div>
    );
  }

  render() {
    const { photos, status } = this.props;

    return (
      <div>
        <div className="row">
          {photos.map((item, index) =>
            <div className="col-md-3 image-item" key={`PhotoItem_${item.id}_${index}`}>
              <img role="presentation" src={item.image_url} />
            </div>
          )}
          <div className="clearfix" />
        </div>

        {(status === 'DONE') && this.renderLoadButton()}
      </div>
    );
  }
}
