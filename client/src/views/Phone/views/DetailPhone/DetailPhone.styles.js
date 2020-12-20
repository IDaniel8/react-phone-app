import styled from 'styled-components'
import { device } from '@theme'

const DetailPhoneContainer = styled.div``

const DetailPhoneWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.tablet} {
    flex-direction: row;
  }
`

const PhoneImage = styled.img`
  display: block;
  width: 100%;
  max-width: 260px;
  margin: 0 0 10px 0;
  align-self: center;
`

const DetailPhoneTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  max-width: 740px;
`

const PhoneTitle = styled.p`
  color: ${(props) => props.theme.colors.primaryText};
  font-size: 1rem;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 12px;
`

const PhoneSubtitle = styled.li`
  color: ${(props) => props.theme.colors.secondaryText};
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 2;
  text-indent: -20px;
  padding-left: 20px;
`

export {
  DetailPhoneContainer,
  DetailPhoneWrapper,
  PhoneImage,
  DetailPhoneTextWrapper,
  PhoneTitle,
  PhoneSubtitle,
}
