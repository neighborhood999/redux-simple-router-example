import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import SearchInput from './SearchInput';
import PhotoList from './PhotoList';

export default class SearchApp extends Component {
    static propTypes = {
      status: PropTypes.string.isRequired,
      photos: PropTypes.array.isRequired,
      searchPhotoAction: PropTypes.func.isRequired,
      searchNextPageAction: PropTypes.func.isRequired,
    }

    render() {
      const { photos, status, searchPhotoAction, searchNextPageAction } = this.props;
      return (
        <div>
          <div id="header" className="header">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-md-offset-3 search-bar-content">
                  <h1>Search On 500px</h1>
                  <p><Link to={`/`}>Back Home</Link></p>
                  <SearchInput searchPhotoAction={searchPhotoAction} status={status} />
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <PhotoList
              searchNextPageAction={searchNextPageAction}
              photos={photos}
              status={status}
            />
          </div>
          <div className="footer">
            <p className="text-center">
              Redux Example By <a href="https://github.com/yildizberkay/redux-example"><em>yildizberkay</em></a>
            </p>
          </div>
        </div>
      );
    }
}
