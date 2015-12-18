import React, { Component, PropTypes } from 'react';

export default class PhotoList extends Component {
  static propTypes = {
    searchNextPageAction: PropTypes.func.isRequired,
    photos: PropTypes.array.isRequired,
    status: PropTypes.string.isRequired,
  };

  nextPage() {
    this.props.searchNextPageAction();
  }

  renderLoadButton() {
    return (
      <div style={{marginBottom: '20px'}} className="row">
        <div className="col-md-6 col-md-offset-3">
          <button onClick={this.nextPage.bind(this)} type="button" className="btn btn-default btn-lg btn-block">載入更多圖片...</button>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <div className="row">
          {
            this.props.photos.map((item, index) => {
              return (
                <div className="col-md-3 image-item" key={`PhotoItem_${item.id}_${index}`}>
                  <img src={item.image_url} />
                </div>
              );
            })
          }
          <div className="clearfix" />
        </div>

        {
          (() => {
            if (this.props.status === 'DONE') {
              return this.renderLoadButton();
            }
          })()
        }
      </div>
    );
  }
}
