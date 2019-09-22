import { takeEvery } from 'redux-saga/effects';
import { ActionType } from '../ActionType';
import { searchSaga } from '../searchSaga';

export function* rootSaga() {
    yield takeEvery(ActionType.START_SEARCH, searchSaga);
}
