import { Metadata } from "next"
import Link from "next/link"
import {
  ArrowUpRight,
  TrendingUp,
  Clock,
  Users,
  DollarSign,
  Zap,
  Shield,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Detailed case studies showcasing real-world projects, challenges solved, and measurable results delivered.",
}

const caseStudies = [
  {
    title: "E-Commerce Platform Modernization",
    client: "Raymour & Flanigan",
    industry: "Furniture Retail",
    duration: "4 months",
    challenge:
      "The client's legacy e-commerce platform was struggling with slow page loads (8+ seconds), frequent crashes during peak traffic, and a checkout abandonment rate of 72%. Their Black Friday sales were being lost to competitors.",
    solution:
      "Rebuilt the frontend with Next.js and implemented server-side rendering for SEO. Designed a microservices architecture with real-time inventory sync across 145+ stores. Added Redis caching layer and implemented optimistic UI updates for cart operations.",
    results: [
      { metric: "Page Load Time", value: "2.1s", change: "-74%", icon: Clock },
      {
        metric: "Checkout Abandonment",
        value: "41%",
        change: "-43%",
        icon: TrendingUp,
      },
      {
        metric: "Black Friday Revenue",
        value: "$2.4M",
        change: "+180%",
        icon: DollarSign,
      },
      {
        metric: "Concurrent Users",
        value: "15K+",
        change: "3x capacity",
        icon: Users,
      },
    ],
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
    duration: "6 months",
    challenge:
      "Retailers were placing orders via phone calls, leading to errors, delayed deliveries, and no visibility into order status. The manual process was costing the company 40+ hours per week in order corrections.",
    solution:
      "Built a mobile-first B2B ordering platform with real-time pricing updates, inventory availability, and delivery scheduling. Implemented offline-first architecture for retailers in areas with poor connectivity. Created admin dashboard with analytics for distributor operations.",
    results: [
      {
        metric: "Order Errors",
        value: "0.3%",
        change: "-96%",
        icon: Shield,
      },
      {
        metric: "Order Processing",
        value: "2 min",
        change: "-85%",
        icon: Zap,
      },
      {
        metric: "Weekly Time Saved",
        value: "38 hrs",
        change: "Automated",
        icon: Clock,
      },
      {
        metric: "Retailer Adoption",
        value: "2,400+",
        change: "in 3 months",
        icon: Users,
      },
    ],
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
    duration: "3 months",
    challenge:
      "Businesses were spending thousands on customer support while providing slow, inconsistent responses. Existing chatbot solutions couldn't understand context or learn from company-specific documentation.",
    solution:
      "Built a multi-tenant SaaS platform with RAG-based AI that learns from uploaded documents. Implemented embeddable chat widget that companies can add to their sites in minutes. Created real-time admin dashboard for conversation monitoring and AI training.",
    results: [
      {
        metric: "Response Accuracy",
        value: "94%",
        change: "vs 60% generic AI",
        icon: TrendingUp,
      },
      {
        metric: "Avg Response Time",
        value: "1.2s",
        change: "Instant",
        icon: Zap,
      },
      {
        metric: "Support Ticket Reduction",
        value: "60%",
        change: "Automated",
        icon: Clock,
      },
      {
        metric: "Setup Time",
        value: "5 min",
        change: "Self-serve",
        icon: Users,
      },
    ],
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
        Real projects, real challenges, real results. Here&apos;s how I&apos;ve
        helped businesses solve complex problems and achieve measurable
        outcomes.
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
                <p className="text-gray-400 text-sm mt-1">
                  {study.industry} • {study.duration}
                </p>
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

            {/* Results */}
            <div className="bg-accent/5 border border-accent/20 p-6 mb-8">
              <h3 className="text-white font-bold mb-4">Results & Impact</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {study.results.map((result, idx) => (
                  <div key={idx} className="text-center">
                    <result.icon className="w-6 h-6 text-accent mx-auto mb-2" />
                    <p className="text-2xl font-bold text-white">
                      {result.value}
                    </p>
                    <p className="text-xs text-gray-400">{result.metric}</p>
                    <p className="text-xs text-green-400 mt-1">
                      {result.change}
                    </p>
                  </div>
                ))}
              </div>
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
          Want similar results for your project?
        </h2>
        <p className="text-gray-400 mb-6 max-w-md mx-auto">
          Let&apos;s discuss how I can help you achieve measurable outcomes.
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
