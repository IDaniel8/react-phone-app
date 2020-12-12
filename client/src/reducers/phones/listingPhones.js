import { PhoneListingActionType } from '@actions'

function listingPhoneReducer(state, action) {
  switch (action.type) {
    case `${PhoneListingActionType.API_PHONES_LISTING}_GET_REQUEST`:
      return { ...state, isFetching: true }
    case `${PhoneListingActionType.API_PHONES_LISTING}_GET_ERROR`:
      return { ...state, isFetching: false }
    case `${PhoneListingActionType.API_PHONES_LISTING}_GET_SUCCESS`:
      return { ...state, list: action.payload, isFetching: false }
    default:
      return state
  }
}

export default listingPhoneReducer
