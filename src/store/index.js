import { createStore, applyMiddleware } from 'redux'
import authReducer from './reducers/auth-reducer'

import createMiddleware from 'redux-saga'
import mainSaga from './sagas'

const sagaMiddleware = createMiddleware()

const store = createStore(
  authReducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(mainSaga)

export default store;