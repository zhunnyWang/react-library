const initial = {
  isLogin: false,
  loading: false
}
export const userReducer = (state = initial, action) => {
  switch (action.type) {
    case 'requestLogin':
      return {
        isLogin: false,
        loading: true
      }
    case 'login':
      return {
        isLogin: true,
        loading: false
      }
    default:
      return state
  }
}

//action creator
export const login = () => dispactch => {
  dispactch({ type: 'requestLogin' })
  setTimeout(() => {
    dispactch({ type: 'login' })
  }, 2000)
}