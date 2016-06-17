import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SearchApp from '../components/SearchApp';
import * as SearchActions from '../actions/searchActions';

function mapStateToProps(state) {
  return {
    photos: state.photos.photos,
    status: state.photos.status,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(SearchActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchApp);
