"use client"

import Link from "next/link"
import { GitHubStars, getRepoFromUrl } from "./github-stars"

interface Project {
  title: string
  href: string
  techStack: string
  description: string
}

const featuredProjects: Project[] = [
  {
    title: "Verto AI – AI Customer Support SaaS",
    href: "https://github.com/Thisisaarush/verto-ai",
    techStack:
      "Next.js, Convex, Google Gemini, Tailwind CSS, Shadcn UI, Clerk, Turborepo",
    description:
      "Built a multi-tenant AI-powered customer support platform with RAG-based knowledge retrieval, embeddable chat widget, and real-time admin dashboard.",
  },
  {
    title: "Scalable E-Commerce Backend",
    href: "https://github.com/Thisisaarush/scalable-ecommerce-backend",
    techStack: "Node.js, Express.js, MongoDB, Docker, Nginx, Kubernetes, Stripe",
    description:
      "Developed a scalable e-commerce backend with microservices, ensuring reliability, fault tolerance, and efficient deployments.",
  },
  {
    title: "URL Shortening Service",
    href: "https://github.com/Thisisaarush/url-shortening-service",
    techStack: "Node.js, Express.js, Redis, Docker, MongoDB, Morgan",
    description:
      "A URL shortening service with features including URL shortening, redirection, updating, and deletion, along with caching using Redis and rate limiting for performance optimization.",
  },
  {
    title: "Shoez-Store",
    href: "https://shoez-store.vercel.app/",
    techStack:
      "Typescript, React, Next.js, Tailwind CSS, Node.js, Express.js, MongoDB, Zustand, GraphQL, Framer Motion, Prisma, RazorPay",
    description:
      "A full-stack e-commerce website with features like product management, user authentication, cart management, and payment gateway integration.",
  },
]

export function FeaturedProjects() {
  return (
    <div className="flex flex-col gap-6">
      {featuredProjects.map((project) => {
        const repo = getRepoFromUrl(project.href)

        return (
          <Link
            key={project.title}
            href={project.href}
            target="_blank"
            className="flex flex-col gap-2 group"
          >
            <span>
              <h3 className="text-lg font-bold group-hover:text-accent inline-flex items-center gap-2 flex-wrap">
                {project.title}
                {repo && <GitHubStars repo={repo} />}
              </h3>
              <p className="text-gray-400 text-sm">
                Tech Stack - {project.techStack}
              </p>
            </span>
            <p>{project.description}</p>
          </Link>
        )
      })}
    </div>
  )
}
