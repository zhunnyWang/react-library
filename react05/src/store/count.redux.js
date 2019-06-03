export const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'add':
      return state = state + 1
    case 'minus':
      return state = state - 1
    default:
      return state
  }
}

//action creator
export const add = () => ({ type: 'add' })
export const minus = () => ({ type: 'minus' })
export const asyncAdd = () => dispactch => {
  setTimeout(() => {
    dispactch({ type: 'add' })
  }, 1000)
}