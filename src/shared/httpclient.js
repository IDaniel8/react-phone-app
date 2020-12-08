import axios from 'axios'

const httpClient = axios.create({
  baseURL: 'url',
})

export { httpClient }
