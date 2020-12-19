import { httpClient } from '@shared'

function getPhones() {
  return httpClient.get('/phones?delay=500', {
    ttl: 30,
  })
}

function getPhone(id) {
  return httpClient.get(`/phone/${id}?delay=500`, { force: true })
}

export { getPhones, getPhone }
