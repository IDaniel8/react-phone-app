const PhoneListingActionType = {
  API_PHONES_LISTING: '@@API_PHONES_LISTING',
}

const listingPhonesActionRequest = () => ({
  type: `${PhoneListingActionType.API_PHONES_LISTING}_GET_REQUEST`,
})

const listingPhonesActionSuccess = (list) => ({
  type: `${PhoneListingActionType.API_PHONES_LISTING}_GET_SUCCESS`,
  payload: list,
})

const listingPhonesActionError = () => ({
  type: `${PhoneListingActionType.API_PHONES_LISTING}_GET_ERROR`,
})

export {
  PhoneListingActionType,
  listingPhonesActionRequest,
  listingPhonesActionSuccess,
  listingPhonesActionError,
}
