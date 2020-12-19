import * as actions from '@actions/phones'

function getListingPhones() {
  return async (dispatch, _, { api }) => {
    try {
      const { data } = await api.getPhones()
      await dispatch(actions.listingPhonesActionSuccess(data))
      return data
    } catch (e) {
      throw new Error(e)
    }
  }
}

export { getListingPhones }
