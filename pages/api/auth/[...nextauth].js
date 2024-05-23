import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: "Ov23liMLzCZlXSY3oxTn",
      clientSecret: "90a27ea2ee7b13313e35d5994b5f4a623e0c4eb6",
    }),
  ],
  secret: "123asd213",
};

export default NextAuth(authOptions);
