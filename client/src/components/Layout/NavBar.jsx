import React, { Fragment } from 'react'

import * as S from './NavBar.styles'

function NavBar({ brandNode }) {
  return (
    <S.NavBarContainer>
      {brandNode ? (
        <Fragment>{brandNode}</Fragment>
      ) : (
        <S.DefaultBrand href="https://github.com/IDaniel8">
          <S.DefaultBrandImage />
          @IDaniel
        </S.DefaultBrand>
      )}
    </S.NavBarContainer>
  )
}

export default NavBar
export { NavBar }
