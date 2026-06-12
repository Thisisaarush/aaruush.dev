const engagementModels = [
  {
    title: "Full-Time Role (Preferred)",
    timeline: "Primary focus",
    features: [
      "Senior IC ownership across frontend and backend",
      "Architecture and code quality leadership",
      "Cross-functional delivery with product and design",
      "Mentoring and engineering process improvements",
    ],
    popular: true,
  },
  {
    title: "Remote Consulting",
    timeline: "Secondary engagement",
    features: [
      "Feature delivery for critical product initiatives",
      "System design and platform modernization",
      "AI integration and RAG implementation",
      "Performance and reliability optimization",
    ],
    popular: false,
  },
  {
    title: "Technical Advisory",
    timeline: "Targeted support",
    features: [
      "Architecture reviews and execution planning",
      "Team onboarding and technical due diligence",
      "Delivery risk identification and mitigation",
      "Roadmap support for scaling engineering teams",
    ],
    popular: false,
  },
]

export function PricingSection() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white underline underline-offset-4 decoration-accent decoration-wavy">
          Engagement Models
        </h2>
        <p className="text-xs text-gray-500 mt-2">
          Full-time opportunities are the current priority. Remote consulting
          remains available for the right scope.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-20">
        {engagementModels.map((model) => (
          <div
            key={model.title}
            className={`border p-6 relative ${
              model.popular
                ? "border-accent/40 bg-accent/5"
                : "border-accent/10"
            }`}
          >
            {model.popular && (
              <span className="absolute -top-3 left-4 bg-accent text-black text-xs font-bold px-2 py-1">
                PRIORITY
              </span>
            )}
            <h3 className="text-lg font-bold text-white mb-2">{model.title}</h3>
            <p className="text-accent text-sm font-medium mb-4">
              {model.timeline}
            </p>
            <ul className="text-gray-400 text-sm space-y-2">
              {model.features.map((feature) => (
                <li key={feature}>• {feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="text-xs text-gray-500 -mt-16 mb-20">
        * Engagement structure and timeline are finalized after an initial
        alignment call.
      </p>
    </div>
  )
}
