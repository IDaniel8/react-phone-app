const PhoneDetailActionType = {
  API_PHONE_DETAIL: '@@API_PHONE_DETAIL',
}

const detailPhoneActionRequest = () => ({
  type: `${PhoneDetailActionType.API_PHONE_DETAIL}_GET_REQUEST`,
})

const detailPhoneActionSuccess = (list) => ({
  type: `${PhoneDetailActionType.API_PHONE_DETAIL}_GET_SUCCESS`,
  payload: list,
})

const detailPhoneActionError = () => ({
  type: `${PhoneDetailActionType.API_PHONE_DETAIL}_GET_ERROR`,
})

export {
  PhoneDetailActionType,
  detailPhoneActionRequest,
  detailPhoneActionSuccess,
  detailPhoneActionError,
}
