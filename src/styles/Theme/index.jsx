'use client'

import { ThemeProvider } from 'styled-components';
import { mode } from './mode';


const Theme = ({ children }) => {
  const md = mode()

  return (
    <ThemeProvider theme={md}>
      {children}
    </ThemeProvider>
  )
}

export default Theme