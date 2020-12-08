import React from 'react'

import * as S from './LoadingDisplay.styles'

function LoadingDisplay() {
  return (
    <S.LoadingContainer>
      <S.LdsSpinner>
        <S.EmptyBox />
        <S.EmptyBox />
        <S.EmptyBox />
        <S.EmptyBox />
        <S.EmptyBox />
        <S.EmptyBox />
        <S.EmptyBox />
        <S.EmptyBox />
        <S.EmptyBox />
        <S.EmptyBox />
        <S.EmptyBox />
        <S.EmptyBox />
      </S.LdsSpinner>
    </S.LoadingContainer>
  )
}

export default LoadingDisplay
export { LoadingDisplay }
