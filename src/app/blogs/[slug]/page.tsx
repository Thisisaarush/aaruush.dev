import { notFound } from "next/navigation"
import { MDX } from "./mdx"
import { getPostBySlug } from "@/lib/blog"

type PageProps = {
  params: Promise<{ slug: string }>
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export default async function Post({ params }: PageProps) {
  const slug = (await params).slug
  const post = getPostBySlug(slug)
  if (!post) {
    notFound()
  }

  return (
    <section className="animate-fade-in-up">
      <h1 className="text-4xl font-bold mb-4 text-white underline underline-offset-4 decoration-accent decoration-wavy">
        {post?.metadata?.title}
      </h1>

      <div className="mb-8 flex items-center justify-between text-sm text-gray-400">
        <span>{formatDate(post?.metadata?.date)}</span>
      </div>

      <article className="prose prose-invert max-w-none prose-headings:text-white prose-a:text-white hover:prose-a:underline">
        <MDX source={post?.content} />
      </article>
    </section>
  )
}
