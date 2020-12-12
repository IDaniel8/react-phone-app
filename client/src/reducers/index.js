import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import phoneReducer from './phones'

const rootReducer = (history) =>
  combineReducers({
    phones: phoneReducer,
    router: connectRouter(history),
  })

export default rootReducer
