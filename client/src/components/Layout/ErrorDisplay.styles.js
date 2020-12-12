import styled from 'styled-components'
import ErrorDefaultImage from '@assets/images/errordefault.png'

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 12px;
`

const Title = styled.div`
  margin-top: 30px;
  font-size: 2rem;
  font-weight: 500;
  line-height: 1.5;
  text-align: center;
  padding: 0 24px;
  color: ${(props) => props.theme.colors.primaryText};
`

const Text = styled.div`
  line-height: 1.5;
  text-align: center;
  padding: 0 24px;
  color: ${(props) => props.theme.colors.secondaryText};
`

const RefreshButton = styled.button`
  margin-top: 16px;
  border: none;
  border-radius: 8px;
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  padding: 12px;
  font-weight: 700;
  &:focus {
    outline: none;
  }
`

const MessageContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const WentWrongImage = styled.img.attrs({ src: ErrorDefaultImage })``

export { Container, WentWrongImage, MessageContainer, Title, Text, RefreshButton }
