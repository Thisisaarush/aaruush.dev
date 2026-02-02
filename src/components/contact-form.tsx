"use client"

import { useState, useEffect } from "react"
import { ArrowUpRight, Loader2, CheckCircle, AlertCircle } from "lucide-react"
import { useCurrency } from "@/lib/currency-context"

type FormStatus = "idle" | "submitting" | "success" | "error" | "duplicate"

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle")
  const [email, setEmail] = useState("")
  const [submittedEmails, setSubmittedEmails] = useState<string[]>([])
  const { formatPrice, loading: currencyLoading } = useCurrency()

  // Load submitted emails from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("submittedEmails")
    if (stored) {
      setSubmittedEmails(JSON.parse(stored))
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Check if email has already been submitted
    if (submittedEmails.includes(email.toLowerCase())) {
      setStatus("duplicate")
      return
    }

    setStatus("submitting")

    const form = e.currentTarget
    const formData = new FormData(form)

    // Convert FormData to JSON object for Formspree
    const data: Record<string, string> = {}
    formData.forEach((value, key) => {
      data[key] = value.toString()
    })

    try {
      const response = await fetch("https://formspree.io/f/mzbynzdd", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })

      if (response.ok) {
        // Save email to localStorage to prevent duplicate submissions
        const newSubmittedEmails = [...submittedEmails, email.toLowerCase()]
        setSubmittedEmails(newSubmittedEmails)
        localStorage.setItem(
          "submittedEmails",
          JSON.stringify(newSubmittedEmails),
        )

        setStatus("success")
        form.reset()
        setEmail("")
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div className="border border-green-500/20 bg-green-500/5 p-8 text-center">
        <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
        <p className="text-gray-400 mb-4">
          Thanks for reaching out. I&apos;ll get back to you within 24 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-accent hover:underline"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {status === "duplicate" && (
        <div className="border border-yellow-500/20 bg-yellow-500/5 p-4 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-yellow-500 font-medium">Already submitted</p>
            <p className="text-gray-400 text-sm">
              You&apos;ve already sent a message with this email. I&apos;ll
              respond soon!
            </p>
          </div>
        </div>
      )}

      {status === "error" && (
        <div className="border border-red-500/20 bg-red-500/5 p-4 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-red-500 font-medium">Something went wrong</p>
            <p className="text-gray-400 text-sm">
              Please try again or email me directly.
            </p>
          </div>
        </div>
      )}

      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-white mb-2"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          disabled={status === "submitting"}
          className="w-full px-4 py-3 bg-transparent border border-accent/20 text-white placeholder-gray-500 focus:border-accent focus:outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          placeholder="Your name"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-white mb-2"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          disabled={status === "submitting"}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            if (status === "duplicate") setStatus("idle")
          }}
          className="w-full px-4 py-3 bg-transparent border border-accent/20 text-white placeholder-gray-500 focus:border-accent focus:outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          placeholder="you@company.com"
        />
      </div>

      <div>
        <label
          htmlFor="budget"
          className="block text-sm font-medium text-white mb-2"
        >
          Budget Range
        </label>
        <select
          id="budget"
          name="budget"
          disabled={status === "submitting"}
          className="w-full px-4 py-3 bg-[#0a0a0a] border border-accent/20 text-white focus:border-accent focus:outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <option value="">Select a range</option>
          <option value="500-1500">
            {currencyLoading
              ? "Loading..."
              : `${formatPrice(500)} - ${formatPrice(1500)}`}
          </option>
          <option value="1500-4000">
            {currencyLoading
              ? "Loading..."
              : `${formatPrice(1500)} - ${formatPrice(4000)}`}
          </option>
          <option value="4000-10000">
            {currencyLoading
              ? "Loading..."
              : `${formatPrice(4000)} - ${formatPrice(10000)}`}
          </option>
          <option value="10000+">
            {currencyLoading ? "Loading..." : `${formatPrice(10000)}+`}
          </option>
        </select>
      </div>

      <div>
        <label
          htmlFor="timeline"
          className="block text-sm font-medium text-white mb-2"
        >
          Timeline
        </label>
        <select
          id="timeline"
          name="timeline"
          disabled={status === "submitting"}
          className="w-full px-4 py-3 bg-[#0a0a0a] border border-accent/20 text-white focus:border-accent focus:outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <option value="">Select timeline</option>
          <option value="asap">ASAP</option>
          <option value="1-2-weeks">1-2 weeks</option>
          <option value="1-month">Within a month</option>
          <option value="flexible">Flexible</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-white mb-2"
        >
          Project Details
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          disabled={status === "submitting"}
          className="w-full px-4 py-3 bg-transparent border border-accent/20 text-white placeholder-gray-500 focus:border-accent focus:outline-none transition-colors resize-none disabled:opacity-50 disabled:cursor-not-allowed"
          placeholder="Tell me about your project, goals, and any specific requirements..."
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-accent text-black font-bold px-6 py-3 hover:bg-accent/90 transition-colors flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-accent"
      >
        {status === "submitting" ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <ArrowUpRight
              size={16}
              className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform"
            />
          </>
        )}
      </button>
    </form>
  )
}
