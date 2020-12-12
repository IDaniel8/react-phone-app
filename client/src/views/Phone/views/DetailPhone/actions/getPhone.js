import * as actions from '@actions/phones'

function getPhone(id) {
  return async (dispatch, _, { api }) => {
    try {
      await dispatch(actions.createPhoneActionRequest())
      const { data } = await api.getPhone(id)
      await dispatch(actions.createPhoneActionSuccess(data))
      return data
    } catch (e) {
      await dispatch(actions.createPhoneActionError())
      throw new Error(e)
    }
  }
}

export { getPhone }
