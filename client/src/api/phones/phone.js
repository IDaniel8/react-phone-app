import PhonesDATA from '../mobiles.json'

function phonesRequestMock(data, time) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), time)
  })
}

function getPhones() {
  const phoneListData = PhonesDATA
  return phonesRequestMock(phoneListData, 3000)
}

function getPhone({ id }) {
  const phoneData = PhonesDATA.find((phone) => phone.id === id)
  return phonesRequestMock(phoneData, 3000)
}

export { getPhones, getPhone }
