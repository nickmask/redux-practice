import { INCREMENT, DECREMENT } from '../actions/index'

export default function counter(state = 0, action) {
  console.log('Reducer firing with action:', action, ' and state:', state)
  switch (action.type) {
    case'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}
