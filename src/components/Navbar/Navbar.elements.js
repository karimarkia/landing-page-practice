import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaMagento } from 'react-icons/fa'
import { Container } from '../../GlobalStyles'

export const Nav = styled.nav`
  background-color: #101522;
  height: 80px;
  display: flex;
  justify-content: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
  align-items: center;
`
export const NavbarConteiner = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;

  ${Container}
`
export const NavLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  font-size: 2rem;
`

export const NavIcon = styled(FaMagento)`
  margin-right: 0.5rem;
`

export const MobileIcon = styled.div`
  display: none;
  color: #fff;

  @media screen and (max-width: 960px) {
    display: block;
    top: 0;
    right: 0;
    cursor: pointer;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    position: absolute;
  }
`
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 70px;
    left: ${({ click }) => (click ? '0' : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background-color: #101522;
  }
`

// need to understand !!!
export const NavItem = styled.li`
  justify-content: space-between;
  height: 80px;
  border-bottom: 2px solid transparent;
  &:hover {
    border-bottom: 2px solid #4b59f7;
  }
  @media screen and (max-width: 960px) {
    width: 100%;
    &:hover {
      border: none;
    }
  }
`

export const NavLinks = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    &:hover {
      color: #4b59f4;
      transition: all 0.3s ease;
    }
  }
`
export const NavItemBtn = styled.li`
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
  }
`

export const NavBtnLink = styled(Link)`
display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`
