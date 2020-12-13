import axios from 'axios'
import { token } from './jwtToken'

const httpClient = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:5000/api'
      : process.env.REACT_APP_API_URL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
})

export { httpClient }
