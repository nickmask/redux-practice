export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

export function increment (value) {
  console.log('Increment action firing with value:', value)
  return {
    type: INCREMENT,
    value
  }
}

export function decrement (value) {
  console.log('Decrement action firing with value:', value)
  return {
    type: DECREMENT,
    value
  }
}
