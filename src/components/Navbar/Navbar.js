import { useState, useEffect } from 'react'
import {
  Nav,
  NavIcon,
  NavLogo,
  MobileIcon,
  NavItem,
  NavLinks,
  NavMenu,
  NavBtnLink,
  NavItemBtn,
} from './Navbar.elements'
import { NavbarConteiner } from './Navbar.elements'
import { FaTimes, FaBars } from 'react-icons/fa'
import { Button } from '../../GlobalStyles'

const Navbar = () => {
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)

  useEffect(() => {
    showButton()
  }, [])

  const closeMobileMenu = () => setClick(false)

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  }
  window.addEventListener('resize', showButton);

  const handleIconClick = () => {
    setClick(!click)
  }

  return (
    <>
      <Nav>
        <NavbarConteiner>
          <NavLogo to="/">
            <NavIcon />
            ULTRA
          </NavLogo>
          <MobileIcon onClick={handleIconClick}>
            {click ? <FaTimes /> : <FaBars />}
          </MobileIcon>
          <NavMenu click={click} onClick={handleIconClick}>
            <NavItem>
              <NavLinks to="/">Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/services">Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/products">Products</NavLinks>
            </NavItem>

            <NavItemBtn>
              {button ? (
                <NavBtnLink to="/sign-up">
                  <Button primary>SIGN UP</Button>
                </NavBtnLink>
              ) : (
                <NavBtnLink to="/sign-up">
                  <Button onClick={closeMobileMenu} fontSize primary>
                    SIGN UP
                  </Button>
                </NavBtnLink>
              )}
            </NavItemBtn>
          </NavMenu>
        </NavbarConteiner>
      </Nav>
    </>
  )
}

export default Navbar
