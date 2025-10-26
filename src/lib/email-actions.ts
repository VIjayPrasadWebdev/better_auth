"use server";
import { success } from "zod";
import transport from "./nodemailer";
import { error } from "console";

type EMAILACTION = {
  to: string;
  subject: string;

  meta: {
    description: string;
    link: string;
  };
};

export default async function mailActions({ to, subject, meta }: EMAILACTION) {
  let mailoptions = {
    from: process.env.NODEMAILER_USER,

    to,
    subject: `Better Auth | ${subject}`,
    html: `
    <div style="font-family: Arial, sans-serif; background-color: #f7f7f7; padding: 30px;">
      <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 2px 6px rgba(0,0,0,0.1);">
        <div style="background-color: #2563eb; color: #ffffff; padding: 16px 24px; text-align: center;">
          <h2 style="margin: 0; font-size: 20px;">Better Auth</h2>
        </div>

        <div style="padding: 24px;">
          <p style="font-size: 16px; color: #333;">Hello,</p>

          <p style="font-size: 15px; color: #444; line-height: 1.6;">
            You’ve received a message regarding <strong>${subject}</strong>.
          </p>

          <p style="font-size: 15px; color: #444; line-height: 1.6;">
            Please click the button below to continue:
          </p>

          <div style="text-align: center; margin: 30px 0;">
            <a href="${meta.link}"
              style="background-color: #2563eb; color: #ffffff; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: 500; display: inline-block;">
              Click Here
            </a>
          </div>

          <p style="font-size: 14px; color: #555;">
            If the button above doesn’t work, copy and paste the following link into your browser:
          </p>

          <p style="font-size: 13px; color: #666; word-break: break-all;">
            <a href="${meta.link}" style="color: #2563eb;">${meta.link}</a>
          </p>

          <p style="font-size: 14px; color: #777; margin-top: 30px;">
            Regards,<br/>
            <strong>Vijayprasad</strong><br/>
            on behalf of <strong>Better Auth Team</strong>
          </p>
        </div>

        <div style="background-color: #f1f5f9; color: #777; text-align: center; font-size: 12px; padding: 12px;">
          &copy; ${new Date().getFullYear()} Better Auth. All rights reserved.
        </div>
      </div>
    </div>
  `,
  };

  try {
    await transport.sendMail(mailoptions);
    return { success: true, error: false };
  } catch (error) {
    console.log(error);

    return { success: false, error: true };
  }
}
