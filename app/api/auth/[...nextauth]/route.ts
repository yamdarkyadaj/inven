import { PrismaClient } from "@/lib/generated/prisma";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs"

const prisma = new PrismaClient()

const handler = NextAuth({
secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req:any) {
        const {email,password} = credentials
        console.log("Credentials received:", credentials);
        const referer = req.headers?.referer || "";

        if (referer.includes("/warehouse/login")) {
          // ✅ Warehouse login logic
          const user = await prisma.users.findUnique({where:{email}})
          if(!user) return null
          const compareHash = await bcrypt.compare(password,user.password)
          
          if(compareHash){
            return user
          }else{
            return null
          }
          
        } else {
          // ✅ Admin login logic
          const user = await prisma.superAdmin.findUnique({where:{email:email}})
          if(!user) return null
          if(user.password === password){
            return user
          }else{
            return null
          }
        }
      }
    })
  ],
  pages: {
    signIn: "/login", // fallback login page
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.role = token.role;
      return session;
    }
  }
});

export { handler as GET, handler as POST };
