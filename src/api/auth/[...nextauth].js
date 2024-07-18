import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
  providers: [
    Providers.Credentials({
      name: 'Login',
      credentials: {
        username: { label: "username", type: "text" },
        password: {  label: "password", type: "password" }
      },
      async authorize(credentials) {
        const res = await fetch('https://flashbot-staging-bb3v6.ondigitalocean.app/v1/auth/token', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            username: credentials.username,
            password: credentials.password
          })
        });

        const user = await res.json();

        if (res.ok && user) {
          return user;
        }
        return null;
      }
    })
  ],
  callbacks: {
    async jwt(token, user) {
      if (user) {
        token.accessToken = user.access_token;
      }
      return token;
    },
    async session(session, token) {
      session.accessToken = token.accessToken;
      return session;
    }
  },
  pages: {
    signIn: '/auth/signin',
  }
});
