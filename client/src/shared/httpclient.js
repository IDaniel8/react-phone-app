import axios from 'axios'
import cachios from 'cachios'
import { token } from './jwtToken'

const axiosInstance = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:5000/api'
      : process.env.REACT_APP_API_URL,
  headers: {
    /* This is a mockup token, in real apps you have to login on backend 
      and receive the token to then persisted in localstorage for following request */
    Authorization: `Bearer ${token}`,
  },
})

const httpClient = cachios.create(axiosInstance)

export { httpClient }
