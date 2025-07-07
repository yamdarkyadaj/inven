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
      async authorize(credentials, req) {
        const {email,password} = credentials
        
        const referer = req.headers?.referer || "";

        if (referer.includes("/user/login")) {
          // ✅ Warehouse login logic
          const user = await prisma.users.findUnique({where:{userName:email}})
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
    // async signIn({ user }) {
    //     // Update last login
    //     if (user?.email) {
    //       try {
    //         await prisma.users.update({
    //           where: { userName: user.email },
    //           data: { lastLogin: new Date() },
    //         })
    //       } catch (error) {
    //         console.error("Failed to update last login:", error)
    //       }
    //     }
    //     return true
    //   },
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role; 
        token.warehousesId = user.warehousesId;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.role = token.role;
      session.user.warehousesId = token.warehousesId;
      return session;
    },
    
  }
});

export { handler as GET, handler as POST };
