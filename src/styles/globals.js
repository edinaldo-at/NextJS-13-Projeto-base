'use client'

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box !important;
  }
  html,
  body, #root {
    overflow: hidden;
    height: 100%;
    
  }
  body{
    -webkit-font-smoothing: antialiased !important;
    background-color: ${props => props.theme.gray.primary};
    padding: 8rem;
  }
  
  html {
    /* a cada 1rem será considerado 10px */
    font: 500 62.5%;
    color: ${props => props.theme.gray.tertiary};
  }
  body,input,button, textarea{
    font: 500 1.6rem;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  h1,h2,h3,h4,h5,p {
    margin:0;
  }
`
export default GlobalStyle;