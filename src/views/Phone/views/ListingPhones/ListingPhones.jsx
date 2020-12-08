import React, { Fragment } from 'react'
import { AsyncConsumer, ErrorBoundary, LoadingDisplay, ErrorDisplay } from '@components'
import { getListingPhones } from './actions'
import { phoneListSelector } from './selectors'

import * as S from './ListingPhones.styles'

function ListingPhones() {
  const phoneList = phoneListSelector()

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
                  <S.PhoneDisplay key={phone.id} phone={phone} />
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
