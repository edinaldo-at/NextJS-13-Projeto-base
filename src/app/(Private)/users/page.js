import { getServerSession } from "next-auth";
import { ButtonLogout } from "../../../components/ButtonLogout";
import { nextAuthOptions } from "../../api/auth/[...nextauth]/route";

export default async function Users() {
  const {data: session} = await getServerSession(nextAuthOptions)
  
  return (
    <>
      <h1>Bem vindo {session.name}!</h1>
      <ButtonLogout/>
    </>
  )
}
