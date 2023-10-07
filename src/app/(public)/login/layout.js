import { ReduxProvider } from "../../../lib/redux/provider";

export default function RootLayout({ children }) {
  return (
    <ReduxProvider>
      { children }
    </ReduxProvider>
  )
}