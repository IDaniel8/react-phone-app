import React, { useCallback } from 'react'
import { useHistory } from 'react-router-dom'

import * as S from './ErrorDisplay.styles'

function ErrorDisplay({
  imageNode,
  title,
  text,
  showAction = true,
  actionCallback,
  className = '',
}) {
  const history = useHistory()
  const refreshCallback = useCallback(() => {
    history.replace('/')
    window.location.reload()
  }, [history])

  return (
    <S.Container className={className}>
      <S.MessageContainer>
        {imageNode ?? <S.WentWrongImage />}
        <S.Title>{title ?? 'An error has ocurred'}</S.Title>
        <S.Text>{text ?? 'Please try refresh the page or contact your administrator...'}</S.Text>
        {showAction && (
          <S.RefreshButton onClick={actionCallback ?? refreshCallback}>Refresh</S.RefreshButton>
        )}
      </S.MessageContainer>
    </S.Container>
  )
}

export default ErrorDisplay
export { ErrorDisplay }
