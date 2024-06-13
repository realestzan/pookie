
import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { createUser } from "./operations"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google({ 
    clientId: process.env.AUTH_GOOGLE_ID,
    clientSecret: process.env.AUTH_GOOGLE_SECRET
  })],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      
      try { 
        const isAllowedToSignIn = true
        if (isAllowedToSignIn) {
       
          const newUser = {
            name: user.name || '',
            email: user.email,
            image: user.image || 'avtar.png',
            createdAt: new Date(),
          };
    
          await createUser(newUser);
          console.log('created user', newUser);
          
          return true
        } else {
          // Return false to display a default error message
          return '/signup'
          // Or you can return a URL to redirect to:
          // return '/unauthorized'
        }
      } catch (e) { 
        console.log('Error', e)
        return false
      }

    },

    async session({ session, token }) {
      if (token.sub) {
        session.user.id = token.sub;
      } else {
        session.user.id = ''; // Handle missing ID case appropriately
      }
      return session;
    },
  },
})

