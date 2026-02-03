"use client"

import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { GitHubStars, getRepoFromUrl } from "./github-stars"

interface Project {
  title: string
  description: string
  role: string
  period: string
  achievements: string[]
  technologies: string[]
  href: string
}

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const repo = getRepoFromUrl(project.href)

  return (
    <div className="group border border-accent/10 p-6 transition-colors hover:border-accent/40 hover:bg-accent/5">
      <Link href={project.href} target="_blank">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-2xl font-bold text-white group-hover:text-accent transition-colors inline-flex items-center gap-3 flex-wrap">
            {project.title}
            {repo && <GitHubStars repo={repo} />}
          </h2>
          <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-accent transition-colors flex-shrink-0" />
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
              Features & Achievements
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
                className="px-2 py-1 text-sm text-gray-300 bg-accent/10 rounded"
              >
                {tech?.toLowerCase()}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
