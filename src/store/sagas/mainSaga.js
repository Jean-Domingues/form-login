import { call, put, takeLatest } from 'redux-saga/effects';

import getData from '../../utils/getData';
import { getItemStorage } from '../../utils/localStorage';

function* getDataFromBase(action) {
  try {
    const email = getItemStorage('FormLoginAuth');
    const dados = yield call(getData, email);
    yield put({ type: 'user/getDataUser', payload: dados });
  } catch {
    throw new Error('User unauthorized');
  }
}


function* mainSaga() {
  yield takeLatest('user/getData', getDataFromBase);
}

export default mainSaga;
