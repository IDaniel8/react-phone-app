import { createAction } from '@reduxjs/toolkit'

const listingPhonesActionRequest = createAction('@@API_PHONES_LISTING_GET_REQUEST')
const listingPhonesActionSuccess = createAction('@@API_PHONES_LISTING_GET_SUCCESS')
const listingPhonesActionError = createAction('@@API_PHONES_LISTING_GET_ERROR')

export { listingPhonesActionRequest, listingPhonesActionSuccess, listingPhonesActionError }
