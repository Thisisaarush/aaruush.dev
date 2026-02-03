"use client"

import { useEffect, useState } from "react"
import { Star } from "lucide-react"

interface GitHubStarsProps {
  repo: string
  className?: string
}

export function GitHubStars({ repo, className = "" }: GitHubStarsProps) {
  const [stars, setStars] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchStars() {
      try {
        const response = await fetch(`https://api.github.com/repos/${repo}`, {
          next: { revalidate: 3600 }, // Cache for 1 hour
        })

        if (response.ok) {
          const data = await response.json()
          setStars(data.stargazers_count)
        }
      } catch (error) {
        console.error("Failed to fetch GitHub stars:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchStars()
  }, [repo])

  if (loading) {
    return (
      <span
        className={`inline-flex items-center gap-1 text-yellow-500 ${className}`}
      >
        <Star size={14} className="fill-yellow-500" />
        <span className="animate-pulse">...</span>
      </span>
    )
  }

  if (stars === null || stars === 0) {
    return null
  }

  return (
    <span
      className={`inline-flex items-center gap-1 text-yellow-500 ${className}`}
    >
      <Star size={14} className="fill-yellow-500" />
      <span>{stars}</span>
    </span>
  )
}

export function getRepoFromUrl(url: string): string | null {
  const match = url.match(/github\.com\/([^/]+\/[^/]+)/)
  return match ? match[1] : null
}
