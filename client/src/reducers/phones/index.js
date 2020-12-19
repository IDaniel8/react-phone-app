import { combineReducers } from '@reduxjs/toolkit'
import listingPhoneReducer from './listingPhones'
import detailPhoneReducer from './detailPhone'

export default combineReducers({
  list: listingPhoneReducer,
  selected: detailPhoneReducer,
})
