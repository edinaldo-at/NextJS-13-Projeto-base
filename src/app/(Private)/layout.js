import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { Box } from '../../styles/componentes/styles';
import { nextAuthOptions } from '../api/auth/[...nextauth]/route';

export default async function PrivateLayout({ children }) {
  const session = await getServerSession(nextAuthOptions)

  if(!session){
    redirect("/login")
  }
  return (
    <Box>{children}</Box>
  )
}