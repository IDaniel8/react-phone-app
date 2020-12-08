import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import * as api from '@api'
import rootReducer from '@reducers'

const history = createBrowserHistory()
const middleware = [thunk.withExtraArgument({ api }), routerMiddleware(history)]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose
const enhancer = composeEnhancers(applyMiddleware(...middleware))

const store = createStore(rootReducer(history), enhancer)

export { store, history }
