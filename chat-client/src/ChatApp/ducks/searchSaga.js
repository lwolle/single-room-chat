import { put } from 'redux-saga/effects';
import { search } from './search';

export function* searchSaga({ searchTerm }) {
    yield put(search(searchTerm));
}
