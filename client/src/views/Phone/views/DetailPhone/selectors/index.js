import { useSelector } from 'react-redux'

export const isPhoneFetchingSelector = () => useSelector(({ phones }) => phones.isFetching)
