import React, { Fragment, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { push } from 'connected-react-router'
import { AsyncConsumer, ErrorBoundary, LoadingDisplay, ErrorDisplay } from '@components'
import { getListingPhones } from './actions'
import { phoneListSelector } from './selectors'

import * as S from './ListingPhones.styles'

function ListingPhones() {
  const dispatch = useDispatch()
  const phoneList = phoneListSelector()

  const onClickFrame = useCallback(
    (phoneId) => () => {
      dispatch(push(`/phones/${phoneId}`))
    },
    [],
  )

  return (
    <S.LisingPhonesContainer>
      <ErrorBoundary errorNode={<ErrorDisplay />}>
        <S.PhonesContainer>
          <AsyncConsumer
            selectorData={phoneList}
            thunkPromise={getListingPhones}
            spinnerNode={<LoadingDisplay />}
          >
            {(data) => (
              <Fragment>
                {data.map((phone) => (
                  <S.PhoneDisplayWrapper key={phone.id} onClick={onClickFrame(phone.id)}>
                    <S.PhoneDisplay phone={phone} />
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
