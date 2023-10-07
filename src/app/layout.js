import { Inter } from 'next/font/google';
import StyledComponentsRegistry from '../lib/styled_componentes/registry';
import Theme from '../styles/Theme';
import GlobalStyle from "../styles/globals";

import NextAuthSessionProvider from "../lib/next_auth/sessionProvider";

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
        <NextAuthSessionProvider>
          <StyledComponentsRegistry>
            <Theme>
              <GlobalStyle />
                <main>{children}</main>
            </Theme>  
          </StyledComponentsRegistry>
        </NextAuthSessionProvider>
      </body>
    </html>
  )
}