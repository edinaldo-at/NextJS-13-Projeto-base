import { Inter } from 'next/font/google';
import NextAuthSessionProvider from "../lib/next_auth/sessionProvider";
import StyledComponentsRegistry from '../lib/styled_componentes/registry';
import Theme from '../styles/Theme';
import GlobalStyle from "../styles/globals";

const inter = Inter({
  weight: ['300', '400', '700'], 
  subsets: ['latin'],
  display: 'swap'
 })

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