import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import connectMongoDB from "../../../lib/mongodb";
import User from "../../../models/user";

const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                await connectMongoDB();
                
                const user = await User.findOne({ email: credentials.email });

                if (!user) {
                    throw new Error("Utilizador não encontrado");
                }

                const isValidPassword = await compare(credentials.password, user.password);
                
                if (!isValidPassword) {
                    throw new Error("Password incorreta");
                }

                return {
                    id: user._id.toString(),
                    name: user.name,
                    email: user.email,
                    image: user.profile?.pfp || "https://res.cloudinary.com/dngcufwm8/image/upload/v1745057172/user_v4xsnh.png"
                };
            }
        })
    ],
    callbacks: {
        // async signIn({ user, account }) {
        //     if (account.provider === 'google') {
        //         const { name, email } = user;
        //         try {
        //             await connectMongoDB();
        //             const userExists = await User.findOne({ email });
        //             if (!userExists) {
        //                 const res = await fetch('/api/user', {
        //                     method: "POST",
        //                     headers: {
        //                         "Content-Type": "application/json",
        //                     },
        //                     body: JSON.stringify({
        //                         name,
        //                         email,
        //                     }),
        //                 });
        //                 if (res.ok) {
        //                     return user;
        //                 }
        //             }
        //         } catch (error) {
        //             console.log(error);
        //         }
        //     }
        //     return user;
        // },
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.name = user.name,
                token.email = user.email;
                token.image = user.image;
            }

            //console.log('Token JWT:', token);
            return token;
        },
        async session({ session, token }) {
            session.user.id = token.id;
            session.user.name = token.name;
            session.user.email = token.email;
            session.user.image = token.image;
            
            //console.log('Sessão:', session);
            return session;
        }
    },
    session: {
        strategy: "jwt",
    },
    debug: false,
    secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);