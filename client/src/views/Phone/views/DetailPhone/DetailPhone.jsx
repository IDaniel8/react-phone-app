import React from 'react'
import { useParams } from 'react-router-dom'

import * as S from './DetailPhone.styles'

function DetailPhone() {
  const { id } = useParams()

  return <S.DetailPhoneContainer>{`Phone detail => ${id}`}</S.DetailPhoneContainer>
}

export default DetailPhone
export { DetailPhone }
