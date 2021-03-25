import { put, takeLatest } from 'redux-saga/effects';

function* login(action) {
  try {
    yield put({type: 'auth/authSuccess'});
  } catch {
    yield put({type: 'auth/authFailed'});
  }
}

function* mainSaga() {
  yield takeLatest('auth/authRequest', login);
}

export default mainSaga;
