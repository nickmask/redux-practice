import React, { Component, PropTypes } from 'react'


class Counter extends Component {
  render() {
  return (

    )
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}

export default Counter
