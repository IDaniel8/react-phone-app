import React from 'react'
import { useParams } from 'react-router-dom'
import { AsyncConsumer, ErrorBoundary, LoadingDisplay } from '@components'
import { imageImportContext } from '@shared'
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
          {({ name, imageFileName, id: phoneId, ...restData }) => (
            <S.DetailPhoneWrapper>
              <S.PhoneImage src={imageImportContext(`./${imageFileName}`).default} />
              <S.DetailPhoneTextWrapper>
                <S.PhoneTitle>{name}</S.PhoneTitle>
                {Object.keys(restData).map((dataKey) => (
                  <S.PhoneSubtitle key={`${id}_${phoneId}`}>{restData[dataKey]}</S.PhoneSubtitle>
                ))}
              </S.DetailPhoneTextWrapper>
            </S.DetailPhoneWrapper>
          )}
        </AsyncConsumer>
      </ErrorBoundary>
    </S.DetailPhoneContainer>
  )
}

export default DetailPhone
export { DetailPhone }
