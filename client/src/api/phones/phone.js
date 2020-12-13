import { httpClient } from '@shared'

function getPhones() {
  return httpClient.get('/phones?delay=500')
}

// function getPhone({ id }) {
//   const phoneData = PhonesDATA.find((phone) => phone.id === id)
//   return phonesRequestMock(phoneData, 3000)
// }

export { getPhones }
