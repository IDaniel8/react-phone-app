import { createReducer } from '@reduxjs/toolkit'
import { detailPhoneActionSuccess } from '@actions/phones'

const initialState = null

export default createReducer(initialState, {
  [detailPhoneActionSuccess]: (_, action) => {
    const phoneFromServer = action.payload
    return phoneFromServer.id
  },
})
