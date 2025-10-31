import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "@/lib/prisma";
import { nextCookies } from "better-auth/next-js";
import { admin } from "better-auth/plugins";
import mailActions from "./email-actions";
export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    },
    github: {
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    },
  },
  emailAndPassword: {
    enabled: true,
    // default better auth password length is 8
    minPasswordLength: 1,

    // default is true
    // autoSignIn: false,
    //  requireEmailVerification: true, // Only if you want to block the email verification

    // reset password / forgot password :

    sendResetPassword: async ({ user, url }) => {
      await mailActions({
        to: user.email,
        subject: "Reset your Password",
        meta: {
          description: "Please click the link to reset your Password",
          link: String(url),
        },
      });
    },

    // we can use our own hashing algorithm for password instead of the default better-auth hasing algorithm
    password: {},
  },

  // verify email :
  emailVerification: {
    sendOnSignUp: true,
    expiresIn: 60 * 60,
    autoSignInAfterVerification: true,
    sendVerificationEmail: async ({ user, url }) => {
      await mailActions({
        to: user.email,
        subject: "Please verify your Email",
        meta: {
          description: "Please verfify your Email for Sign-up",
          link: String(url),
        },
      });
    },
  },
  //custom Id instead of better-auth Id :
  /** 
  advanced:{
    database:{
      generateId:false
    }
  }
    */

  // we can manually expiry the user session default is 7 days
  // session: {
  //   expiresIn: 5,
  // },
  plugins: [
    nextCookies(),
    admin({
      adminRoles: ["admin"],
    }),
  ],
});
