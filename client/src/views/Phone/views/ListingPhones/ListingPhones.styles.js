import styled from 'styled-components'
import { device } from '@theme'
import { PhoneDisplay as BasePhoneDisplay } from './components'

const LisingPhonesContainer = styled.div``
const PhonesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 20px;
  @media ${device.tablet} {
    display: block;
    flex-wrap: unset;
    justify-content: unset;
  }
`

const PhoneDisplayWrapper = styled.div`
  width: 280px;

  &:not(:last-of-type) {
    margin-bottom: 20px;
  }

  @media ${device.tablet} {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
  }
`
const PhoneDisplay = styled(BasePhoneDisplay)``

export { LisingPhonesContainer, PhonesContainer, PhoneDisplay, PhoneDisplayWrapper }
