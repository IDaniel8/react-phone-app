import React, { PureComponent, Fragment } from 'react'
import { ErrorDisplay } from '../Layout'

class ErrorBoundary extends PureComponent {
  state = { hasError: false, status: undefined }

  static getDerivedStateFromError(error) {
    return { hasError: true, status: error.status }
  }

  renderErrorLayout() {
    const { error404Layout } = this.props
    const { status } = this.state
    switch (status) {
      case 404:
        return <Fragment>{error404Layout ?? <ErrorDisplay />}</Fragment>
      default:
        return <ErrorDisplay />
    }
  }

  render() {
    const { hasError } = this.state
    const { children } = this.props

    return hasError ? (
      <Fragment>{this.renderErrorLayout()}</Fragment>
    ) : (
      <Fragment>{children}</Fragment>
    )
  }
}

export default ErrorBoundary
export { ErrorBoundary }
