import { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Detailed case studies showcasing real-world projects, challenges solved, and product impact delivered.",
}

const caseStudies = [
  {
    title: "E-Commerce Platform Modernization",
    client: "Raymour & Flanigan",
    industry: "Furniture Retail",
    challenge:
      "The client's legacy e-commerce platform was struggling with slow pages, frequent crashes during peak traffic, and a checkout flow that created friction for customers.",
    solution:
      "Rebuilt the frontend with Next.js and implemented server-side rendering for SEO. Designed a microservices architecture with real-time inventory sync across 145+ stores. Added Redis caching layer and implemented optimistic UI updates for cart operations.",
    impact:
      "Rebuilt e-commerce platform with Next.js, improving performance and checkout experience.",
    technologies: [
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Kubernetes",
      "Stripe",
    ],
    testimonial: {
      quote:
        "Aarush's architecture handled our peak holiday traffic without a hiccup. The real-time inventory system he built saved us countless overselling issues.",
      author: "David Mitchell",
      role: "Senior Engineering Manager",
    },
  },
  {
    title: "B2B Digital Ordering Platform",
    client: "MyBees (AB InBev)",
    industry: "Beverage Distribution",
    challenge:
      "Retailers were placing orders via phone calls, leading to errors, delayed deliveries, and limited visibility into order status for both retailers and operations teams.",
    solution:
      "Built a mobile-first B2B ordering platform with real-time pricing updates, inventory availability, and delivery scheduling. Implemented offline-first architecture for retailers in areas with poor connectivity. Created admin dashboard with analytics for distributor operations.",
    impact: "Built B2B ordering system for AB InBev used by retailers daily.",
    technologies: [
      "React Native",
      "Node.js",
      "MongoDB",
      "Redis",
      "AWS",
      "Socket.io",
    ],
    testimonial: {
      quote:
        "The platform transformed how our retailers order. Real-time pricing and easy delivery scheduling made a real impact on our operations.",
      author: "Jennifer Rodriguez",
      role: "Product Lead",
    },
  },
  {
    title: "AI-Powered Customer Support SaaS",
    client: "Verto AI (Personal Project)",
    industry: "SaaS / AI",
    challenge:
      "Businesses were spending thousands on customer support while providing slow, inconsistent responses. Existing chatbot solutions couldn't understand context or learn from company-specific documentation.",
    solution:
      "Built a multi-tenant SaaS platform with RAG-based AI that learns from uploaded documents. Implemented embeddable chat widget that companies can add to their sites in minutes. Created real-time admin dashboard for conversation monitoring and AI training.",
    impact:
      "Context-aware AI support platform with RAG-based knowledge retrieval and human escalation.",
    technologies: [
      "Next.js",
      "Convex",
      "Google Gemini",
      "LangChain",
      "Tailwind CSS",
      "Clerk",
    ],
    testimonial: {
      quote:
        "This showcases exactly what modern AI can do for customer support - context-aware, fast, and actually helpful.",
      author: "Open Source",
      role: "GitHub Project",
    },
  },
]

export default function CaseStudiesPage() {
  return (
    <main className="animate-fade-in-up">
      <h1 className="text-4xl font-bold mb-4 text-white underline underline-offset-4 decoration-accent decoration-wavy">
        Case Studies
      </h1>

      <p className="text-gray-400 mb-12 leading-relaxed max-w-2xl">
        Real projects, real challenges, real outcomes. Here&apos;s how I&apos;ve
        helped businesses solve complex problems and ship better products.
      </p>

      <div className="space-y-16">
        {caseStudies.map((study, index) => (
          <div
            key={index}
            className="border border-accent/10 p-8 hover:border-accent/30 transition-colors"
          >
            {/* Header */}
            <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
              <div>
                <span className="text-accent text-sm font-medium">
                  {study.client}
                </span>
                <h2 className="text-2xl font-bold text-white mt-1">
                  {study.title}
                </h2>
                <p className="text-gray-400 text-sm mt-1">{study.industry}</p>
              </div>
            </div>

            {/* Challenge & Solution */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-accent font-bold mb-2">The Challenge</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {study.challenge}
                </p>
              </div>
              <div>
                <h3 className="text-accent font-bold mb-2">The Solution</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {study.solution}
                </p>
              </div>
            </div>

            {/* Impact */}
            <div className="bg-accent/5 border border-accent/20 p-6 mb-8">
              <h3 className="text-white font-bold mb-2">Impact</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {study.impact}
              </p>
            </div>

            {/* Technologies */}
            <div className="mb-6">
              <h3 className="text-white font-bold mb-2">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {study.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs text-gray-300 bg-accent/10 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <div className="border-l-2 border-accent pl-4">
              <p className="text-gray-300 italic text-sm">
                &quot;{study.testimonial.quote}&quot;
              </p>
              <p className="text-gray-400 text-xs mt-2">
                — {study.testimonial.author}, {study.testimonial.role}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-16 border border-accent/40 bg-accent/5 p-8 text-center">
        <h2 className="text-2xl font-bold text-white mb-2">
          Want similar outcomes for your project?
        </h2>
        <p className="text-gray-400 mb-6 max-w-md mx-auto">
          Let&apos;s discuss how I can help you build high-impact product
          experiences.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-accent text-black font-bold px-6 py-3 hover:bg-accent/90 transition-colors group"
        >
          Start a Conversation
          <ArrowUpRight
            size={16}
            className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform"
          />
        </Link>
      </div>
    </main>
  )
}
