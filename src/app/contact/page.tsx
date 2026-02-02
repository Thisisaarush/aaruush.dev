import { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight, Mail, MessageSquare, Calendar } from "lucide-react"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch to discuss your project. I'm available for freelance full-stack development, AI integration, and SaaS development.",
}

export default function ContactPage() {
  return (
    <main className="animate-fade-in-up">
      <h1 className="text-4xl font-bold mb-4 text-white underline underline-offset-4 decoration-accent decoration-wavy">
        Let&apos;s Talk
      </h1>

      <p className="text-gray-400 mb-12 leading-relaxed max-w-2xl">
        Have a project in mind? I&apos;d love to hear about it. Fill out the
        form below or reach out directly — I typically respond within 24 hours.
      </p>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div>
          <ContactForm />
        </div>

        {/* Contact Info */}
        <div className="space-y-8">
          <div className="border border-accent/10 p-6">
            <Mail className="w-8 h-8 text-accent mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">Email</h3>
            <p className="text-gray-400 mb-4">
              For project inquiries and proposals
            </p>
            <Link
              href="mailto:tanwaraarush007@gmail.com"
              className="text-accent hover:underline"
            >
              tanwaraarush007@gmail.com
            </Link>
          </div>

          <div className="border border-accent/10 p-6">
            <MessageSquare className="w-8 h-8 text-accent mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">Social</h3>
            <p className="text-gray-400 mb-4">DM me for quick questions</p>
            <div className="flex gap-4">
              <Link
                href="https://x.com/Thisisaarush"
                target="_blank"
                className="text-accent hover:underline"
              >
                Twitter
              </Link>
              <Link
                href="https://www.linkedin.com/in/thisisaarush"
                target="_blank"
                className="text-accent hover:underline"
              >
                LinkedIn
              </Link>
            </div>
          </div>

          <div className="border border-accent/10 p-6">
            <Calendar className="w-8 h-8 text-accent mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">
              Schedule a Call
            </h3>
            <p className="text-gray-400 mb-4">
              Prefer to talk? Book a 30-min discovery call
            </p>
            <Link
              href="https://calendly.com/thisisaarush"
              target="_blank"
              className="inline-flex items-center gap-2 text-accent hover:underline group"
            >
              Book on Calendly
              <ArrowUpRight
                size={14}
                className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>

          {/* What to expect */}
          <div className="bg-accent/5 border border-accent/20 p-6">
            <h3 className="text-lg font-bold text-white mb-4">
              What happens next?
            </h3>
            <ol className="text-gray-400 space-y-3 text-sm">
              <li className="flex gap-3">
                <span className="text-accent font-bold">1.</span>
                I&apos;ll review your message within 24 hours
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">2.</span>
                We&apos;ll schedule a call to discuss your project
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">3.</span>
                You&apos;ll receive a detailed proposal with timeline and
                pricing
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">4.</span>
                Once approved, we kick off the project!
              </li>
            </ol>
          </div>
        </div>
      </div>
    </main>
  )
}
