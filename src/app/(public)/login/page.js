'use client'

import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const router = useRouter()

  async function handleSubmit(event){
    event.preventDefault()
    setLoading(true)

    const result = await signIn("credentials",{
      email,
      password,
      redirect: false
    })

    setLoading(false)

    if (result?.error) {
      console.log(result)
      return
    }
    router.replace('/users')
  }

  return (
    <div >
      <h1 >Login</h1>

      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="email" 
          placeholder="Digite seu e-mail" 
          onChange={(e) => setEmail(e.target.value)}
        />

        <input 
          type="password" 
          name="password" 
          placeholder="Digite sua senha" 
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
        >
          Entrar
        </button>
        {loading && <span>Loading...</span>}
      </form>
    </div>
  )
}
