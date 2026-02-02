import { notFound } from "next/navigation"
import { Metadata } from "next"
import { MDX } from "./mdx"
import { getPostBySlug, getPosts } from "@/lib/blog"

type PageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = getPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const slug = (await params).slug
  const post = getPostBySlug(slug)

  if (!post) {
    return {}
  }

  return {
    title: post.metadata.title,
    description: post.metadata.description,
    openGraph: {
      title: post.metadata.title,
      description: post.metadata.description,
      type: "article",
      publishedTime: post.metadata.date,
      authors: ["Aarush Tanwar"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metadata.title,
      description: post.metadata.description,
    },
  }
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
