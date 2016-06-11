import React, { Component, PropTypes } from 'react'
<<<<<<< Updated upstream
import { connect } from 'react-redux'

=======
import { bindActionCreators } from 'redux'
import { increment, decrement } from '../actions/index.js'
import { connect } from 'react-redux'
>>>>>>> Stashed changes

class Counter extends Component {
  constructor(props) {
    super(props)
    this.incrementAsync = this.incrementAsync.bind(this)
    this.incrementIfOdd = this.incrementIfOdd.bind(this)
  }

  incrementIfOdd() {
    if (this.props.value % 2 !== 0) {
      this.props.onIncrement()
    }
  }

  incrementAsync() {
    setTimeout(this.props.onIncrement, 1000)
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

function mapStateToProps (state) {
  return { value: state }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ increment, decrement }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
