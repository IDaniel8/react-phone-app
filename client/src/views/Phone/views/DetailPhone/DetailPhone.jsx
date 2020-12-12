import React from 'react'
// import { useDispatch } from 'react-redux'
// import { createPhone } from './actions'
import { isPhoneFetchingSelector } from './selectors'

import * as S from './DetailPhone.styles'

function DetailPhone() {
  // const dispatch = useDispatch()
  const isFetching = isPhoneFetchingSelector()

  // const addPhone = useCallback(() => {
  //   dispatch(createPhone({ name: 'Ali Daniel', job: 'Developer' }))
  // }, [dispatch, createPhone])

  return (
    <S.DetailPhoneContainer>
      <button disabled={isFetching} type="button">
        PRESS ME
      </button>
    </S.DetailPhoneContainer>
  )
}

export default DetailPhone
export { DetailPhone }
