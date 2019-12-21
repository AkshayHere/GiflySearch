
import{
    GET_NEWS,
    NEWS_RECEIVED,
    GET_SEARCH_IMAGES,
    SET_SEARCH_PARAM,
    SET_FAVORITES,
    SET_OFFSET
} from './constants'

export function setSearchParam(payload) {
    return { type: SET_SEARCH_PARAM, payload }
}

export function setOffset(payload) {
    return { type: SET_OFFSET, payload }
}

export function searchImages(payload) {
    return { type: GET_SEARCH_IMAGES, payload }
}

export function setFavorites(payload) {
    return { type: SET_FAVORITES, payload }
}