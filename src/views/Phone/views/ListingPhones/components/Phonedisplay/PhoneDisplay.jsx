import React from 'react'
import { imageImportContext } from '@shared'

import * as S from './PhoneDisplay.styles'

function PhoneDisplay({ phone, className = '' }) {
  return (
    <S.PhoneWrapper className={className}>
      <S.PhoneImage src={imageImportContext(`./${phone.imageFileName}`).default} />
      <S.PhoneTextWrapper>
        <span>{phone.name}</span>
      </S.PhoneTextWrapper>
    </S.PhoneWrapper>
  )
}

export default PhoneDisplay
export { PhoneDisplay }
