import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { increment, decrement } from '../actions/index.js'
import { connect } from 'react-redux'
import Reddit from './Reddit'

export default class Counter extends Component {
  constructor(props) {
    super(props)
    this.incrementAsync = this.incrementAsync.bind(this)
    this.incrementIfOdd = this.incrementIfOdd.bind(this)
  }

  incrementIfOdd() {
    if (this.props.value % 2 !== 0) {
      this.props.increment()
    }
  }

  incrementAsync() {
    setTimeout(this.props.increment, 1000)
  }

  render() {
    const { value, increment, decrement} = this.props
  return (
    <p>
      Clicked: {value} times
      {' '}
      <button onClick={increment}>
      +
      </button>
      {' '}
      <button onClick={decrement}>
        -
      </button>
      {' '}
      <button onClick={this.incrementIfOdd}>
        Increment if odd
      </button>
      {' '}
      <button onClick={this.incrementAsync}>
        Increment async
      </button>
    </p>

    )
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired
}

//what you are mapping at a prop, in my case it is a "value" or how many times you have clicked +/-
function mapStateToProps (state) {
  return { value: state }
}

//mapping actions to props. in my case it is increment and decrement. Now I can access them through this.props.action.
function mapDispatchToProps (dispatch) {
  return bindActionCreators({ increment, decrement }, dispatch)
}

//the final peice of the puzzle. This connects you to your actions/state.
export default connect(mapStateToProps, mapDispatchToProps)(Counter)
