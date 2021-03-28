import {put, takeLatest } from 'redux-saga/effects';

function* login(action) {
  try {
    yield put({type: 'auth/authSuccess'});
  } catch {
    throw new Error('User unauthorized')
  }
}

function* mainSaga() {
  yield takeLatest('auth/authRequest', login);
}

export default mainSaga;
