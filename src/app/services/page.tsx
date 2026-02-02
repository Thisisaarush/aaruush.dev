import { Metadata } from "next"
import Link from "next/link"
import {
  ArrowUpRight,
  Code2,
  Cpu,
  Globe,
  Layers,
  MessageSquare,
  Settings,
  Zap,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full-stack development services including web applications, AI integration, API development, and SaaS products. Let's build something great together.",
}

const services = [
  {
    icon: Globe,
    title: "Full-Stack Web Development",
    description:
      "End-to-end web applications built with modern technologies. From responsive frontends to scalable backends.",
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL"],
  },
  {
    icon: Cpu,
    title: "AI Integration & RAG Systems",
    description:
      "Integrate AI capabilities into your products. Chatbots, knowledge bases, and intelligent automation.",
    technologies: ["OpenAI", "Google Gemini", "LangChain", "Vector DBs", "RAG"],
  },
  {
    icon: Layers,
    title: "SaaS Product Development",
    description:
      "Build multi-tenant SaaS platforms from scratch. Authentication, billing, dashboards, and more.",
    technologies: ["Stripe", "Clerk", "Convex", "Prisma", "Tailwind CSS"],
  },
  {
    icon: Code2,
    title: "API Design & Development",
    description:
      "RESTful and GraphQL APIs designed for performance, security, and scalability.",
    technologies: ["REST", "GraphQL", "Express.js", "tRPC", "OpenAPI"],
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Speed up your existing applications. Database optimization, caching strategies, and code refactoring.",
    technologies: ["Redis", "CDN", "Code Splitting", "SSR/SSG", "Profiling"],
  },
  {
    icon: Settings,
    title: "DevOps & Deployment",
    description:
      "CI/CD pipelines, containerization, and cloud deployments. Get your code to production reliably.",
    technologies: ["Docker", "Kubernetes", "GitHub Actions", "Vercel", "AWS"],
  },
]

const process = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We discuss your project requirements, goals, timeline, and budget. I'll ask questions to understand your vision.",
  },
  {
    step: "02",
    title: "Proposal",
    description:
      "I'll send a detailed proposal with scope, timeline, milestones, and pricing. No surprises later.",
  },
  {
    step: "03",
    title: "Development",
    description:
      "Regular updates and demos as we build. You'll have visibility into progress at every stage.",
  },
  {
    step: "04",
    title: "Launch & Support",
    description:
      "Smooth deployment to production. I offer ongoing support and maintenance packages.",
  },
]

export default function ServicesPage() {
  return (
    <main className="animate-fade-in-up">
      <h1 className="text-4xl font-bold mb-4 text-white underline underline-offset-4 decoration-accent decoration-wavy">
        Services
      </h1>

      <p className="text-gray-400 mb-12 leading-relaxed max-w-2xl">
        I help startups and businesses build software that scales. Whether
        you&apos;re launching an MVP or improving an existing product, I can
        help you ship faster.
      </p>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-20">
        {services.map((service) => (
          <div
            key={service.title}
            className="border border-accent/10 p-6 hover:border-accent/40 hover:bg-accent/5 transition-colors"
          >
            <service.icon className="w-8 h-8 text-accent mb-4" />
            <h2 className="text-xl font-bold text-white mb-2">
              {service.title}
            </h2>
            <p className="text-gray-400 mb-4">{service.description}</p>
            <div className="flex flex-wrap gap-2">
              {service.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-xs text-gray-300 bg-accent/10 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Process */}
      <h2 className="text-2xl font-bold mb-8 text-white underline underline-offset-4 decoration-accent decoration-wavy">
        How I Work
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {process.map((item) => (
          <div key={item.step} className="relative">
            <span className="text-5xl font-bold text-accent/20">
              {item.step}
            </span>
            <h3 className="text-lg font-bold text-white mt-2 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-400 text-sm">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Pricing */}
      <h2 className="text-2xl font-bold mb-8 text-white underline underline-offset-4 decoration-accent decoration-wavy">
        Investment
      </h2>

      <div className="grid md:grid-cols-3 gap-6 mb-20">
        <div className="border border-accent/10 p-6">
          <h3 className="text-lg font-bold text-white mb-2">Small Project</h3>
          <p className="text-3xl font-bold text-accent mb-2">$2,000+</p>
          <p className="text-gray-400 text-sm mb-4">1-2 weeks</p>
          <ul className="text-gray-400 text-sm space-y-2">
            <li>• Landing pages</li>
            <li>• Small features</li>
            <li>• Bug fixes & optimization</li>
            <li>• API integrations</li>
          </ul>
        </div>

        <div className="border border-accent/40 bg-accent/5 p-6 relative">
          <span className="absolute -top-3 left-4 bg-accent text-black text-xs font-bold px-2 py-1">
            MOST POPULAR
          </span>
          <h3 className="text-lg font-bold text-white mb-2">Medium Project</h3>
          <p className="text-3xl font-bold text-accent mb-2">$5,000+</p>
          <p className="text-gray-400 text-sm mb-4">2-6 weeks</p>
          <ul className="text-gray-400 text-sm space-y-2">
            <li>• Full web applications</li>
            <li>• MVP development</li>
            <li>• AI chatbot integration</li>
            <li>• Dashboard & admin panels</li>
          </ul>
        </div>

        <div className="border border-accent/10 p-6">
          <h3 className="text-lg font-bold text-white mb-2">Large Project</h3>
          <p className="text-3xl font-bold text-accent mb-2">$15,000+</p>
          <p className="text-gray-400 text-sm mb-4">2-4 months</p>
          <ul className="text-gray-400 text-sm space-y-2">
            <li>• Complete SaaS platforms</li>
            <li>• Microservices architecture</li>
            <li>• Complex integrations</li>
            <li>• Ongoing maintenance</li>
          </ul>
        </div>
      </div>

      {/* FAQ */}
      <h2 className="text-2xl font-bold mb-8 text-white underline underline-offset-4 decoration-accent decoration-wavy">
        Common Questions
      </h2>

      <div className="space-y-6 mb-20">
        <div>
          <h3 className="text-white font-bold mb-2">
            What&apos;s your availability?
          </h3>
          <p className="text-gray-400">
            I typically take on 1-2 projects at a time to ensure quality. My
            current availability is within 2 weeks for new projects.
          </p>
        </div>
        <div>
          <h3 className="text-white font-bold mb-2">
            Do you work with startups?
          </h3>
          <p className="text-gray-400">
            Absolutely! I love working with startups. I can help with MVPs,
            technical architecture, and scaling as you grow.
          </p>
        </div>
        <div>
          <h3 className="text-white font-bold mb-2">
            What about ongoing support?
          </h3>
          <p className="text-gray-400">
            I offer maintenance packages starting at $500/month for bug fixes,
            updates, and small improvements.
          </p>
        </div>
        <div>
          <h3 className="text-white font-bold mb-2">Do you sign NDAs?</h3>
          <p className="text-gray-400">
            Yes, I&apos;m happy to sign NDAs before discussing sensitive project
            details.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="border border-accent/40 bg-accent/5 p-8 text-center">
        <MessageSquare className="w-12 h-12 text-accent mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-white mb-2">
          Ready to start your project?
        </h2>
        <p className="text-gray-400 mb-6 max-w-md mx-auto">
          Let&apos;s discuss your requirements and see if we&apos;re a good fit.
          No commitment required.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-accent text-black font-bold px-6 py-3 hover:bg-accent/90 transition-colors group"
        >
          Get in Touch
          <ArrowUpRight
            size={16}
            className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform"
          />
        </Link>
      </div>
    </main>
  )
}
