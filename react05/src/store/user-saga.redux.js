const initial = {
  isLogin: false,
  loading: false,
  error: ''
}
export const userReducer = (state = initial, action) => {
  switch (action.type) {
    case 'requestLogin':
      return {
        isLogin: false,
        loading: true,
        error: ''
      }
    case 'loginSuccess':
      return {
        isLogin: true,
        loading: false,
        error: ''
      }
    case 'loginFailure':
      return {
        isLogin: false,
        loading: false,
        error: action.message
      }
    default:
      return state
  }
}

//action creator
export function login (uname) {
  return { type: 'login', uname }
}