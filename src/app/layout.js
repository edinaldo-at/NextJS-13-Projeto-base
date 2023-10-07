import { Inter } from 'next/font/google';
import StyledComponentsRegistry from '../lib/styled_componentes/registry';
import Theme from '../styles/Theme';
import GlobalStyle from "../styles/globals";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next 13',
  description: 'Implementando layouts e styled-components',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head />
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <Theme>
            <GlobalStyle />
              <main>{children}</main>
          </Theme>  
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}