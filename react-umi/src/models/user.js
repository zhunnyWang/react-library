import axios from 'axios'
import router from 'umi/router'

//登录请求方法
function login (payload) {
  return axios.post('/api/login', payload).then(res => {
    return { code: res.data.code, userinfo: res.data.data }
  })
}

const userinfo = JSON.parse(localStorage.getItem("userinfo")) ||
  {
    token: '',
    role: '',
    username: '',
    balance: 0
  }
export default {
  namespace: "user",
  state: userinfo,
  effects: {
    *login ({ payload }, { call, put }) {
      //解构 res中有个data data中的data起个别名userinfo
      try {
        const { userinfo } = yield call(login, payload)
        localStorage.setItem("userinfo", JSON.stringify(userinfo))
        yield put({ type: 'init', payload: userinfo })
        router.push('/')
      } catch (error) { }
    }
  },
  //改变state的状态
  reducers: {
    init (state, { payload }) {
      return payload
    }
  }
}