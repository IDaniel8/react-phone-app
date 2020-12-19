import { createReducer } from '@reduxjs/toolkit'
import { listingPhonesActionSuccess, detailPhoneActionSuccess } from '@actions/phones'

const initialState = []

export default createReducer(initialState, {
  [listingPhonesActionSuccess]: (_, action) => {
    return action.payload
  },
  [detailPhoneActionSuccess]: (state, action) => {
    const phoneFromServer = action.payload
    const newList = state.filter((phone) => phone.id !== phoneFromServer.id)
    return [...newList, phoneFromServer]
  },
})
