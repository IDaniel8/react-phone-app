import { createReducer } from '@reduxjs/toolkit'
import { listingPhonesActionSuccess } from '@actions/phones'

const initialState = []

export default createReducer(initialState, {
  [listingPhonesActionSuccess]: (_, action) => {
    return action.payload
  },
})
