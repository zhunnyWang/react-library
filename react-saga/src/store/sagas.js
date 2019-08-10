import { call, put, takeEvery, select } from "redux-saga/effects";

// 模拟登录
const UserService = {
  login(uname) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (uname === "Jerry") {
          resolve({ id: 1, name: "Jerry", age: 20 });
        } else {
          reject("用户名或密码错误");
        }
      }, 1000);
    });
  },
  getList() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          {
            id: "1",
            name: "订单1"
          },
          {
            id: "2",
            name: "订单2"
          },
          {
            id: "3",
            name: "订单3"
          }
        ]);
      }, 1000);
    });
  }
};

// worker Saga
function* login(action) {
  try {
    console.log("i am in *login")
    yield put({ type: "requestLogin" });
    const result = yield call(UserService.login, action.uname);
    yield put({ type: "loginSuccess", result });
  } catch (message) {
    yield put({ type: "loginFailure", message });
  }
}

function* getList() {
  try {
    console.log("i am in *order")
    yield put({ type: "requestOrder" });
    const result = yield call(UserService.getList);
    const orderState = yield select((state)=>state.order)
    yield put({ type: "orderSuccess", result, orderState });
  } catch (error) {
    yield put({ type: "orderFailure", error });
  }
}

function* mySaga() {
  yield takeEvery("getList", getList);
  yield takeEvery("login", login);
}

export default mySaga;
