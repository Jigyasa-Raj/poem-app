'use client'

import { useState } from 'react'
import { sendEmail } from './actions'
import Header from '@/components/header'
import Footer from '@/components/footer'

export default function Contact() {
  const [isSending, setIsSending] = useState(false)
  const [sent, setSent] = useState(false)

  async function handleSubmit(formData: FormData) {
    setIsSending(true)
    await sendEmail(formData)
    setIsSending(false)
    setSent(true)
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl font-serif mb-8">Get in touch</h1>
            <form action={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
              </div>
              <button
                type="submit"
                disabled={isSending}
                className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition-colors disabled:opacity-50"
              >
                {isSending ? 'Sending...' : 'Send Message'}
              </button>
              {sent && (
                <p className="text-green-600 text-center">
                  Thank you for your message! I&apos;ll get back to you soon.
                </p>
              )}
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
