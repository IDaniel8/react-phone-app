import React, { useCallback, Fragment } from 'react'
import { useDispatch } from 'react-redux'
import { useAsync } from 'react-async'

function AsyncConsumer({ thunkPromise, params, selectorData, children, spinnerNode }) {
  const dispatch = useDispatch()

  const promiseFn = useCallback(async () => {
    const data = await dispatch(thunkPromise(params))
    return data
  }, [thunkPromise])

  const { data, error, isPending } = useAsync({ promiseFn })
  const apiData = selectorData ?? data

  if (isPending) return <Fragment>{spinnerNode ?? 'Loading...'}</Fragment>
  if (error) {
    const errorMessage = error.message ?? error
    // eslint-disable-next-line no-console
    console.error(errorMessage)
    throw new Error()
  }
  return <Fragment>{children(apiData)}</Fragment>
}

export default AsyncConsumer
export { AsyncConsumer }
