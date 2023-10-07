"use client"

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export async function ButtonLogout(){
  const router = useRouter();
  async function handleLogout(){
    await signOut({
      redirect: false
    })
    router.replace("/login")
  }

  return <button onClick={handleLogout}>Sair</button>
}