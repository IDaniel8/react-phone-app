import { PhoneListingActionType, PhoneDetailActionType } from '@actions'
import listingPhoneReducer from './listingPhones'
import detailPhoneReducer from './detailPhone'

const initialState = {
  list: [],
  selected: null,
  isFetching: false,
}

function phoneReducer(state = initialState, action) {
  if (action.type.includes(PhoneListingActionType.API_PHONES_LISTING))
    return listingPhoneReducer(state, action)
  if (action.type.includes(PhoneDetailActionType.API_PHONE_DETAIL))
    return detailPhoneReducer(state, action)
  return state
}

export default phoneReducer
