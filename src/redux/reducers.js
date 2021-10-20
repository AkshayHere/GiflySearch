import { unionBy, mergeWith } from 'lodash';

import {
  GET_NEWS,
  GET_SEARCH_IMAGES,
  SET_IMAGES,
  SET_SEARCH_PARAM,
  SET_OFFSET,
  SET_FAVORITES,
  SHOW_LOADER,
  HIDE_LOADER
} from "./constants";

let initialState = {
  loading: false,
  searchParams: "",
  offset: 0,
  images: [],
  favImages: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_NEWS:
      return {
        ...state, loading: true
      };

    case GET_SEARCH_IMAGES:
      return { ...state };

    case SET_IMAGES:
      return { ...state, images: action.payload };

    case SET_SEARCH_PARAM:
      return { ...state, searchParams: action.payload };

    case SET_OFFSET:
      return { ...state, offset: action.payload };

    case SET_FAVORITES:
      {
        let existingFavs = state.favImages;
        let newFavs = [action.payload]
        newFavs = unionBy(existingFavs, newFavs, 'id');
        return mergeWith({}, state, {
          favImages: newFavs
        });
      }

    case SHOW_LOADER:
      return { ...state, loading: true };

    case HIDE_LOADER:
      return { ...state, loading: false };

    default:
      return state;
  }
};

export default reducer;