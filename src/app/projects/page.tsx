import { Metadata } from "next"
import { ExternalLink } from "lucide-react"
import Link from "next/link"
import { projectData as projects } from "@/lib/projectsData"
import { ProjectCard } from "@/components/project-card"

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore my portfolio of full-stack projects including AI-powered SaaS platforms, microservices architectures, and real-time applications.",
}

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
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </main>
  )
}
