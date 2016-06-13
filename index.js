import 'babel-polyfill'
import thunkMiddleware from 'redux-thunk'
import React from 'react'
import ReactDOM from 'react-dom'
import createLogger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/index.js'
import Counter from './components/Counter'
import Reddit from './components/Reddit'
import { Provider } from 'react-redux'
import { fetchPostsIfNeeded } from './actions/index'

const loggerMiddleware = createLogger()

//creating the store and passing in the reducers (so it is aware of the state)
const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
  )
)

// this is so that we start the app by loading the data into our store (SMART)
store.dispatch(fetchPostsIfNeeded('reactjs')).then(() =>
  console.log(store.getState())
)

function render () {
  ReactDOM.render(
    <Provider store={store}>
      <Reddit/>
    </Provider>,
    document.getElementById('root')
  )
}

//still unsure about this jazz here.
store.subscribe(render)

render()
