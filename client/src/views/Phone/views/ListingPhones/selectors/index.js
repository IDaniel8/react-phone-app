import { useSelector } from 'react-redux'

export const phoneListSelector = () => useSelector(({ phones }) => phones.list)
