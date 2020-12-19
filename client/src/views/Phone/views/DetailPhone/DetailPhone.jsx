import React, { Fragment } from 'react'
import { useParams } from 'react-router-dom'
import { AsyncConsumer, ErrorBoundary, LoadingDisplay } from '@components'
import { getDetailPhone } from './actions'

import * as S from './DetailPhone.styles'

function DetailPhone() {
  const { id } = useParams()

  return (
    <S.DetailPhoneContainer>
      <ErrorBoundary>
        <AsyncConsumer
          thunkPromise={getDetailPhone}
          params={{ id }}
          spinnerNode={<LoadingDisplay />}
        >
          {(data) => (
            <Fragment>
              <pre>{JSON.stringify(data, null, 2)}</pre>
            </Fragment>
          )}
        </AsyncConsumer>
      </ErrorBoundary>
    </S.DetailPhoneContainer>
  )
}

export default DetailPhone
export { DetailPhone }
