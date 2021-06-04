import styled from 'styled-components'

export const Container = styled.div`
  grid-area: AS;
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.white};
  padding-left: 20px;
  border-right: 1px solid ${(props) => props.theme.colors.gray};
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  height: 70px;
`

export const Title = styled.h3`
  margin-left: 10px;
  color: ${(props) => props.theme.colors.white};
`

export const Logo = styled.img`
  width: 40px;
  height: 40px;
`

export const MenuList = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`

export const MenuItem = styled.a`
  color: ${(props) => props.theme.colors.white};
  text-decoration: none;
  transition: opacity 300ms;
  margin: 10px 0;
  display: flex;
  align-items: center;

  &:hover {
    opacity: 0.7;
  }

  > span {
    font-size: 16px;
    height: 16px;
  }

  > svg {
    font-size: 22px;
    margin-right: 5px;
  }
`
