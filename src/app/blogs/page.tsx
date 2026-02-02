import { Metadata } from "next"
import { getPosts } from "@/lib/blog"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Technical articles, case studies, and insights on full-stack development, AI integration, and building scalable applications.",
}

const posts = getPosts().sort(
  (a, b) =>
    new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime(),
)

export default async function BlogPage() {
  return (
    <main className="animate-fade-in-up relative">
      <h1 className="text-4xl font-bold mb-12 text-white underline underline-offset-4 decoration-accent decoration-wavy">
        Blogs
      </h1>

      <div className="flex flex-col gap-4">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blogs/${post.slug}`}
            className="flex items-start justify-between gap-2 group"
          >
            <span className="max-w-[80%]">
              <p className="text-lg font-bold group-hover:text-accent">
                {post.metadata.title}
              </p>
              <p className="text-gray-400">{post.metadata.description}</p>
            </span>
            <p className="text-gray-400">{post.metadata.date}</p>
          </Link>
        ))}
      </div>
    </main>
  )
}
