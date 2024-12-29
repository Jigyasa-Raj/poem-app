'use server'

import { Resend } from 'resend'

// Use the environment variable to access the API key
const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const message = formData.get('message') as string

  await resend.emails.send({
    from: 'Contact Form <onboarding@resend.dev>',
    to: 'jigyasamail05@gmail.com',
    subject: `New message from ${name}`,
    text: `
Name: ${name}
Email: ${email}
Message: ${message}
    `,
  })
}
