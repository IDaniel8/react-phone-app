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
    margin: 0 10px 0 0;
  }
`

const PhoneTextWrapper = styled.div`
  padding: 10px;
  text-align: center;
  @media ${device.tablet} {
    text-align: left;
  }
`

const PhoneTitle = styled.p`
  color: ${(props) => props.theme.colors.primaryText};
  font-size: 1rem;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 12px;
  ${(props) =>
    props.onClick &&
    `
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  `}
`

const PhoneSubtitle = styled.p`
  color: ${(props) => props.theme.colors.secondaryText};
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.6;
`

export { PhoneImage, PhoneWrapper, PhoneTextWrapper, PhoneTitle, PhoneSubtitle }
