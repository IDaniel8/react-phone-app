import * as actions from '@actions/phones'

function getListingPhones() {
  return async (dispatch, _, { api }) => {
    try {
      // await dispatch(actions.listingPhonesActionRequest())
      const { data } = await api.getPhones()
      await dispatch(actions.listingPhonesActionSuccess(data))
      return data
    } catch (e) {
      // await dispatch(actions.listingPhonesActionError())
      throw new Error(e)
    }
  }
}

export { getListingPhones }
