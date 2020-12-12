import React, { Fragment } from 'react'

import * as S from './Layout.styles'

function Layout({ children, navBarNode }) {
  return (
    <Fragment>
      {navBarNode && <Fragment>{navBarNode}</Fragment>}
      <S.LayoutContainer>{children}</S.LayoutContainer>
    </Fragment>
  )
}

export default Layout
export { Layout }
