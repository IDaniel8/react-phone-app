import axios from 'axios'
import { token } from './jwtToken'

const httpClient = axios.create({
  baseURL: `http://localhost:${process.env.PORT || 5000}/api`,
  headers: {
    Authorization: `Bearer ${token}`,
  },
})

export { httpClient }
