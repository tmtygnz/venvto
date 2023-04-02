import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import GoogleProvider from "next-auth/providers/google";
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId:
        "509444619210-uk2jmroe56kkfo5p1o5v78sr26d35t8d.apps.googleusercontent.com",
      clientSecret: "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",
    }),
    // ...add more providers here
  ],
};
export default NextAuth(authOptions);
