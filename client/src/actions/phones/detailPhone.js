import { createAction } from '@reduxjs/toolkit'

const detailPhoneActionRequest = createAction('@@API_PHONE_DETAIL_GET_REQUEST')
const detailPhoneActionSuccess = createAction('@@API_PHONE_DETAIL_GET_SUCCESS')
const detailPhoneActionError = createAction('@@API_PHONE_DETAIL_GET_ERROR')

export { detailPhoneActionRequest, detailPhoneActionSuccess, detailPhoneActionError }
