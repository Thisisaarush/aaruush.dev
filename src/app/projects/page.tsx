import { ExternalLink } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "Scalable E-Commerce Backend",
    description: "",
    role: "Creator & Maintainer",
    period: "",
    achievements: [
      "Built a scalable e-commerce backend with microservices",
      "Ensured reliability, fault tolerance, and efficient deployments",
      "30+ ⭐ Stars on GitHub",
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Docker",
      "Nginx",
      "Kubernetes",
      "Stripe",
    ],
    href: "https://github.com/Thisisaarush/scalable-ecommerce-backend",
  },
  {
    title: "URL Shortening Service",
    description:
      "A URL shortening service with features including URL shortening, redirection, updating, and deletion, along with caching using Redis and rate limiting for performance optimization.",
    role: "Creator & Maintainer",
    period: "",
    achievements: [
      "Caching using Redis and rate limiting for performance optimization",
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "Redis",
      "Docker",
      "MongoDB",
      "Morgan",
    ],
    href: "https://github.com/Thisisaarush/url-shortening-service",
  },
  {
    title: "Shoez-Store",
    description:
      " A full-stack e-commerce website with features like product management, user authentication, cart management, and payment gateway integration.",
    role: "Creator & Maintainer",
    period: "",
    achievements: [
      "Product management, user authentication, cart management",
      "RazorPay Payment Gateway Integration",
      "Secure Login and Registration with bcrypt and JWT",
    ],
    technologies: [
      "Typescript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Zustand",
      "GraphQL",
      "Framer",
      "Motion",
      "Prisma",
      "RazorPay",
    ],
    href: "https://shoez-store.vercel.app/",
  },
]

export default function ProjectsPage() {
  return (
    <main className="animate-fade-in-up">
      <h1 className="text-4xl font-bold mb-8 text-white underline underline-offset-4 decoration-accent decoration-wavy">
        Projects
      </h1>

      <p className="text-gray-400 mb-12 leading-relaxed">
        Here are some of the projects i&apos;ve worked on. You can find more on
        my{" "}
        <Link
          href="https://www.github.com/thisisaarush"
          target="_blank"
          className="text-accent hover:underline hover:underline-offset-4"
        >
          GitHub
        </Link>
      </p>

      <div className="space-y-12">
        {projects?.map((project, idx) => (
          <div
            key={idx}
            className="group border border-accent/10 p-6 transition-colors hover:border-accent/40 hover:bg-accent/5"
          >
            <Link href={project.href} target="_blank">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-white group-hover:text-accent transition-colors">
                  {project.title}
                </h2>
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-accent transition-colors" />
              </div>
            </Link>

            <p className="text-sm text-gray-400 mb-4">
              {project.role} {project.period && `(${project.period})`}
            </p>

            <p className="text-gray-300 mb-6">{project.description}</p>

            <div className="space-y-6">
              {project.achievements.length > 0 && (
                <div>
                  <h3 className="text-white font-semibold mb-2">
                    Achievements
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-400">
                    {project.achievements.map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <h3 className="text-white font-semibold mb-2">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-sm text-gray-300 bg-gray-800/50 rounded"
                    >
                      {tech?.toLowerCase()}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
