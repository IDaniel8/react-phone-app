import React, { PureComponent, Fragment } from 'react'

class ErrorBoundary extends PureComponent {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    const { hasError } = this.state
    const { errorNode, children } = this.props

    return hasError ? (
      <Fragment>{errorNode ?? 'Error has ocurred...'}</Fragment>
    ) : (
      <Fragment>{children}</Fragment>
    )
  }
}

export default ErrorBoundary
export { ErrorBoundary }
