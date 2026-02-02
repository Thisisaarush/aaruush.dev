"use client"

import { useCurrency } from "@/lib/currency-context"

export function ServicesFAQ() {
  const { formatPrice, loading } = useCurrency()

  const faqs = [
    {
      question: "What's your availability?",
      answer:
        "I typically take on 1-2 projects at a time to ensure quality. My current availability is within 2 weeks for new projects.",
    },
    {
      question: "Do you work with startups?",
      answer:
        "Absolutely! I love working with startups. I can help with MVPs, technical architecture, and scaling as you grow.",
    },
    {
      question: "What about ongoing support?",
      answer: loading
        ? "I offer maintenance packages starting at .../month for bug fixes, updates, and small improvements."
        : `I offer maintenance packages starting at ${formatPrice(500)}/month for bug fixes, updates, and small improvements.`,
    },
    {
      question: "Do you sign NDAs?",
      answer:
        "Yes, I'm happy to sign NDAs before discussing sensitive project details.",
    },
  ]

  return (
    <div className="space-y-6 mb-20">
      {faqs.map((faq) => (
        <div key={faq.question}>
          <h3 className="text-white font-bold mb-2">{faq.question}</h3>
          <p className="text-gray-400">{faq.answer}</p>
        </div>
      ))}
    </div>
  )
}
