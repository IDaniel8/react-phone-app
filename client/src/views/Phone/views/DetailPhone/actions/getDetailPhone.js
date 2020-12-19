import * as actions from '@actions/phones'
import { HandleServerError } from '@shared'

function getDetailPhone({ id }) {
  return async (dispatch, _, { api }) => {
    try {
      const { data } = await api.getPhone(id)
      await dispatch(actions.detailPhoneActionSuccess(data))
      return data
    } catch (e) {
      throw new HandleServerError(e.response)
    }
  }
}

export { getDetailPhone }
