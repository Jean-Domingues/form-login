import { call, put, takeLatest } from 'redux-saga/effects';

function delay(){
  return new Promise((resolve, reject) => setTimeout(()=>{
    return reject('oi')
}, 1000))
}


function* login(action) {
  try {
    const dado = yield call(delay)
    yield put({type: 'auth/authSuccess', payload: dado});
  } catch {
    throw new Error('User unauthorized')
  }
}

function* mainSaga() {
  yield takeLatest('auth/authRequest', login);
}

export default mainSaga;
