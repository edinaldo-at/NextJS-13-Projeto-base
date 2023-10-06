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
  }
  
  html {
    /* a cada 1rem será considerado 10px */
    font: 300 62.5% 'Poppins', sans-serif;
  }
  body,input,button, textarea{
    font: 500 1.6rem 'Inter', sans-serif;
    
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