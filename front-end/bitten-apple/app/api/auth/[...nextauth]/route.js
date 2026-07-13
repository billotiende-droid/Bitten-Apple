import NextAuth from "next-auth";
import CredentialsProvider from  "next-auth/providers/credentials"


export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {label: "Email", type: "text"},
                password: {label: "Password", type: "password"}
            },
            async authorize(credentials) {

                const res = await fetch("https://your-backend.com/api/login", {
                    method: 'POST',
                    body: JSON.stringify(credentials),
                    headers: {"Content-Type": "application/json"}
                });

                const user = await res.json();

                if (res.ok && user) {
                    return user;
                }

                return null
                
            }
        })
    ],
};

const handler = NextAUth(authOptions);
export { handler as GET, handler as POST}