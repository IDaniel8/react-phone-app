import styled from 'styled-components'
import GithubLogo from '@assets/images/githublogo.png'

const NavBarContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors.navbar};
  padding: 12px 20px;
`

const DefaultBrand = styled.a`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.white};
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
`

const DefaultBrandImage = styled.img.attrs({ src: GithubLogo })`
  width: 40px;
  margin-right: 10px;
`

export { NavBarContainer, DefaultBrand, DefaultBrandImage }
