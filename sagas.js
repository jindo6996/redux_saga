import { delay } from 'redux-saga'
import { put, takeEvery, all } from 'redux-saga/effects'
export function* helloSagas() {
    console.log("hello sagas!!!");
}
export function* incrementAsync() {
    yield delay(1000);
    yield put({type:"INCREMENT"})
}

export function* watchIncrementAsync() {
    yield takeEvery("INCREMENT_ASYNC",incrementAsync)
}

export default function* rootSaga() {
    yield all([helloSagas(), watchIncrementAsync()])
}