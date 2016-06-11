import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import reducers from './reducers/index.js'
import Counter from './components/Counter'
import { Provider } from 'react-redux'

let store = createStore(reducers)

function render () {
  ReactDOM.render(
    <Provider store={store}>
      <Counter/>
    </Provider>,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)
