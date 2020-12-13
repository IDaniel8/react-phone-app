import styled from 'styled-components'
import { device } from '@theme'

const PhoneWrapper = styled.div`
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 8px;
  padding: 10px;
  display: flex;
  width: 100%;
  flex-direction: column;

  @media ${device.tablet} {
    flex-direction: row;
    & > * {
      flex: 1;
    }
  }
`

const PhoneImage = styled.img`
  display: block;
  width: 140px;
  margin: 0 0 10px 0;
  align-self: center;

  @media ${device.tablet} {
    max-width: 100px;
    max-height: 100px;
    margin: 0 10px 0 0;
  }
`

const PhoneTextWrapper = styled.div`
  border: 1px solid;
  padding: 10px;
`

export { PhoneImage, PhoneWrapper, PhoneTextWrapper }
