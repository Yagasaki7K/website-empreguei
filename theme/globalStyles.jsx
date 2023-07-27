'use client'
import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: 'Poppins', sans-serif;
}

html,
body {
  max-width: 100vw;
  overflow-x: hidden;
  scroll-behavior: smooth;
  background: ${({theme}) => theme.bg};
  color: ${({theme}) => theme.font};
}

@media (prefers-color-scheme: dark) {
  html,
  body {
    background: ${({theme}) => theme.bg};
    color: ${({theme}) => theme.font};
  }
}

a {
  color: inherit;
  text-decoration: none;
}

`
 
export default GlobalStyle;