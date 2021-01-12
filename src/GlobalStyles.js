import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
*{
    box-sizing:border-box;
    margin:0;
    padding:0;
    font-family:'Source Sans Pro',sans-serif;
}
`

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 50px;
  padding-right: 50px;

  @media screen and (max-width: 991px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`

export const Button = styled.button`
  border-radius: 4px;
  outline: none;
  color: #fff;
  background-color: ${({ primary }) => (primary ? '#4b59f7' : '#0467fb')};
  padding: ${({ big }) => (big ? ' 12px 64px ' : '10px 20px')};
  font-size: ${({ fontSize }) => (fontSize ? '20px' : '16px')};
  white-space: nowrap;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    background-color: ${({ primary }) => (primary ? '#0467fb' : '#4b59f7')};
    color: #fff;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`

export default GlobalStyles
