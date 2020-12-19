import { configureStore } from '@reduxjs/toolkit'
// eslint-disable-next-line import/no-extraneous-dependencies
import thunk from 'redux-thunk'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import * as api from '@api'
import rootReducer from '@reducers'

const history = createBrowserHistory()
const middleware = [thunk.withExtraArgument({ api }), routerMiddleware(history)]

const store = configureStore({
  reducer: rootReducer(history),
  middleware,
  devTools: Boolean(process.env.NODE_ENV === 'development'),
})

export { store, history }
