"use client"

import { useCurrency } from "@/lib/currency-context"

const pricingTiers = [
  {
    title: "Small Project",
    basePrice: 500,
    timeline: "3-7 days",
    features: [
      "Landing pages",
      "Small features",
      "Bug fixes & optimization",
      "API integrations",
    ],
    popular: false,
  },
  {
    title: "Medium Project",
    basePrice: 1500,
    timeline: "1-3 weeks",
    features: [
      "Full web applications",
      "MVP development",
      "AI chatbot integration",
      "Dashboard & admin panels",
    ],
    popular: true,
  },
  {
    title: "Large Project",
    basePrice: 4000,
    timeline: "1-2 months",
    features: [
      "Complete SaaS platforms",
      "Microservices architecture",
      "Complex integrations",
      "Ongoing maintenance",
    ],
    popular: false,
  },
]

export function PricingSection() {
  const { currency, countryCode, loading, formatPrice, resetToUSD } =
    useCurrency()

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-white underline underline-offset-4 decoration-accent decoration-wavy">
          Investment
        </h2>
        {!loading && (
          <span className="text-xs text-gray-500">
            Prices in {currency.code} •{" "}
            <button
              onClick={resetToUSD}
              className="text-accent hover:underline"
            >
              Show in USD
            </button>
          </span>
        )}
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-20">
        {pricingTiers.map((tier) => {
          const formattedPrice = formatPrice(tier.basePrice)

          return (
            <div
              key={tier.title}
              className={`border p-6 relative ${
                tier.popular
                  ? "border-accent/40 bg-accent/5"
                  : "border-accent/10"
              }`}
            >
              {tier.popular && (
                <span className="absolute -top-3 left-4 bg-accent text-black text-xs font-bold px-2 py-1">
                  MOST POPULAR
                </span>
              )}
              <h3 className="text-lg font-bold text-white mb-2">
                {tier.title}
              </h3>
              <p className="text-3xl font-bold text-accent mb-2">
                {loading ? (
                  <span className="animate-pulse">...</span>
                ) : (
                  `${formattedPrice}+`
                )}
              </p>
              <p className="text-gray-400 text-sm mb-4">{tier.timeline}</p>
              <ul className="text-gray-400 text-sm space-y-2">
                {tier.features.map((feature) => (
                  <li key={feature}>• {feature}</li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>

      <p className="text-xs text-gray-500 -mt-16 mb-20">
        * Prices are estimates and may vary based on project complexity. Final
        quote provided after discovery call.
        {countryCode !== "US" && " Exchange rates are approximate."}
      </p>
    </div>
  )
}
