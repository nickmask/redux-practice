export default function counter(state = 0, action) {
  console.log('Whats the actions?', action, 'What\'s the state?:', state)
  switch (action.type) {
    case'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}
