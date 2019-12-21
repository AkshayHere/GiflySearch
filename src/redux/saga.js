import { select, take, takeLatest,takeEvery, call, put, spawn, delay, all } from 'redux-saga/effects';

import {
	GET_SEARCH_IMAGES,
	SET_IMAGES,
	SHOW_LOADER,
  	HIDE_LOADER
} from './constants';

import requests from './requests';

export function* searchImages() {

	yield takeLatest(GET_SEARCH_IMAGES, function* fetchRecords() {
		let imagesList = [];
		
		try {
			window.store.dispatch({ type: SHOW_LOADER, payload: {} });
			const response = yield call(requests.search);
			imagesList = response.data.data;

			window.store.dispatch({ type: HIDE_LOADER, payload: {} });
			
		} catch (error) {
			console.warn('error : ', error);
			return;
		}

		yield put({ type: SET_IMAGES, payload: imagesList });
	  }); 
}

export default function* rootSaga() {
  const sagas = [
		searchImages
	];

	yield all(
		sagas.map((saga) =>
			spawn(function* () {
				while (true) {
					try {
						yield call(saga);
						break;
					} catch (e) {
						yield delay(1000); // Avoid infinite failures blocking app TODO use backoff retry policy...
					}
				}
			})
		)
	);
}
