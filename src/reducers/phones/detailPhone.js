import { PhoneDetailActionType } from '@actions'

function detailPhoneReducer(state, action) {
  switch (action.type) {
    case `${PhoneDetailActionType.API_PHONES_DETAIL}_GET_REQUEST`:
      return { ...state, isFetching: true }
    case `${PhoneDetailActionType.API_PHONES_DETAIL}_GET_ERROR`:
      return { ...state, isFetching: false }
    case `${PhoneDetailActionType.API_PHONE_DETAIL}_GET_SUCCESS`:
      return { ...state, selected: action.payload, isFetching: false }
    default:
      return state
  }
}

export default detailPhoneReducer
