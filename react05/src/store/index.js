import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
// import thunk from 'redux-thunk';
import { counterReducer } from "./count.redux";
import { userReducer } from "./user-saga.redux";
import createSagaMiddleware from 'redux-saga'
import mySaga from './sagas'

//创建saga中间件并注册
const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  combineReducers({ user: userReducer }),
  applyMiddleware(logger, sagaMiddleware)
)

//开启拦截功能，拦截指定的action
sagaMiddleware.run(mySaga)

export default store