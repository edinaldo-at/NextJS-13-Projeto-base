"use client";

import {Login} from  "./components/Login";
import { useAppSelector } from "../../../lib/redux/store";

export default function LoginPage() {
  const {username, isModerator} = useAppSelector(state => state.authReducer.value)

  return (
    <div>
      <h1>Usuário logado: {username}</h1>
      {isModerator && <h2>Is Moderator</h2>}
      <br></br>
      <Login/>
    </div>
  )
}
