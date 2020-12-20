import React, { Fragment, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { push } from 'connected-react-router'
import { AsyncConsumer, ErrorBoundary, LoadingDisplay } from '@components'
import { getListingPhones } from './actions'

import * as S from './ListingPhones.styles'

function ListingPhones() {
  const dispatch = useDispatch()

  const onClickFrame = useCallback(
    (phoneId) => () => {
      dispatch(push(`/phones/${phoneId}`))
    },
    [],
  )

  return (
    <S.LisingPhonesContainer>
      <ErrorBoundary>
        <S.PhonesContainer>
          <AsyncConsumer thunkPromise={getListingPhones} spinnerNode={<LoadingDisplay />}>
            {(data) => (
              <Fragment>
                {data.map((phone) => (
                  <S.PhoneDisplayWrapper key={phone.id}>
                    <S.PhoneDisplay phone={phone} toDetailPhone={onClickFrame(phone.id)} />
                  </S.PhoneDisplayWrapper>
                ))}
              </Fragment>
            )}
          </AsyncConsumer>
        </S.PhonesContainer>
      </ErrorBoundary>
    </S.LisingPhonesContainer>
  )
}

export default ListingPhones
export { ListingPhones }
