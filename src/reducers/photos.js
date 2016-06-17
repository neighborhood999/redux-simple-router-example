import * as types from '../constants/searchActionTypes';

const initialState = {
  status: 'IDLE',
  photos: [],
};

export default function searchPhotos(state = initialState, action) {
  switch (action.type) {
    case types.SEARCH_DONE:
      return {
        ...state,
        photos: [...state.photos, ...action.photos],
        status: 'DONE',
        page: action.page,
        keyword: action.keyword,
      };
    case types.SEARCH_PENDING_FOR_NEXT:
      return {
        ...state,
        status: 'PENDING_FOR_NEXT',
      };
    case types.SEARCH_PENDING:
      return {
        ...state,
        photos: [],
        status: 'PENDING',
      };
    default:
      return state;
  }
}
