import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { ReduxProvider } from "../../../lib/redux/provider";
import { nextAuthOptions } from '../../api/auth/[...nextauth]/route';

export default async function RootLayout({ children }) {
  const session = await getServerSession(nextAuthOptions)

  if(session){
    redirect("/users")
  }

  return (
    <ReduxProvider>
      { children }
    </ReduxProvider>
  )
}