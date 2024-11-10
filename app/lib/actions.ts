"use server";

import { Resend } from "resend";
import { VercelInviteUserEmail } from "../../emails/vercel-invite-user";

const resend = new Resend(process.env.RESEND_API_KEY);

type State = { error: string } | { data: string };

export async function send(prevState: State, formData: FormData) {
  const email = formData.get("email") as string;

  const { data, error } = await resend.emails.send({
    from: `Resend <${process.env.RESEND_FROM_EMAIL}>`,
    to: [process.env.RESEND_TO_EMAIL],
    subject: email,
    react: VercelInviteUserEmail({}),
  });

  if (error) {
    return { error: error.message };
  }

  console.log(data);

  return { data: "Email sent!" };
}
