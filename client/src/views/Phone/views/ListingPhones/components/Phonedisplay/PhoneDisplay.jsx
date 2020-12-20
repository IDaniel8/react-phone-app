import React, { Fragment } from 'react'
import { imageImportContext } from '@shared'
import { useWindowSize } from '@hooks'
import { size } from '@theme'

import * as S from './PhoneDisplay.styles'

function PhoneDisplay({ phone, className = '', toDetailPhone }) {
  const windowSize = useWindowSize()

  return (
    <S.PhoneWrapper
      onClick={windowSize.width < size.tablet ? toDetailPhone : undefined}
      className={className}
    >
      <S.PhoneImage src={imageImportContext(`./${phone.imageFileName}`).default} />
      <S.PhoneTextWrapper>
        <S.PhoneTitle onClick={windowSize.width > size.tablet ? toDetailPhone : undefined}>
          {phone.name}
        </S.PhoneTitle>
        {windowSize.width > size.tablet && (
          <Fragment>
            <S.PhoneSubtitle>{phone.manufacture}</S.PhoneSubtitle>
            <S.PhoneSubtitle>{phone.color}</S.PhoneSubtitle>
          </Fragment>
        )}
      </S.PhoneTextWrapper>
    </S.PhoneWrapper>
  )
}

export default PhoneDisplay
export { PhoneDisplay }
