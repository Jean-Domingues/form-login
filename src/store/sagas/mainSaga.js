import { call, put, takeLatest, all } from 'redux-saga/effects';

import getData from '../../utils/getData';
import { getItemStorage } from '../../utils/localStorage';

function* getDataFromBase(action) {
  try {
    const email = getItemStorage('FormLoginAuth');
    const dados = yield call(getData, email);
    yield put({ type: 'user/getDataUser', payload: dados });
  } catch {
    return null
  }
}

function* helloSaga(){
  console.log('Olá sagas');
}

function* watchGetDataFromBase(){
  yield takeLatest('user/getData', getDataFromBase);
}

function* mainSaga() {
  yield all([
    helloSaga(),
    watchGetDataFromBase()
  ])
}

export default mainSaga;
