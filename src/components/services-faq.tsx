export function ServicesFAQ() {
  const faqs = [
    {
      question: "What's your availability?",
      answer:
        "I'm currently prioritizing senior full-time engineering roles. I also take on selective remote consulting engagements when there's strong technical alignment.",
    },
    {
      question: "What teams do you work best with?",
      answer:
        "Product-focused startups and established teams building modern web products, SaaS platforms, and AI-enabled features.",
    },
    {
      question: "Do you support short-term consulting?",
      answer:
        "Yes. I support targeted consulting for architecture reviews, high-impact feature delivery, and performance or reliability improvements.",
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
