import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { Authenticate } from "../../../../services/features/querys/authService";


const nextAuthOptions = {
	providers: [
		CredentialsProvider({
			name: 'credentials',
			credentials: {
				email: { label: 'email', type: 'text' },
				password: { label: 'password', type: 'password' }
			},

			async authorize(credentials, req) {
				const request = await Authenticate(
					'/auth/sign_in', 
					{
						email: credentials.email,
						password: credentials.password
					}
				)
				const user = request?.data
				
				if (user) {
					return user
				}
				return null
			},
		})
	],
	pages: {
		signIn: '/login',
		error: '/login/error'
	},
	callbacks: {
		async jwt({ token, user }) {
			//user && (token.user = user)
			return {...token, ...user};
			
		},
		async session({ session, token, user }){
			session = token
			return session
		}
	}
}

const handler = NextAuth(nextAuthOptions)

export { handler as GET, handler as POST, nextAuthOptions };
