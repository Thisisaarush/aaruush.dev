import { ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between mb-12 text-sm">
      <Link href="/">
        <Image
          src={"/aarush-tanwar-logo.svg"}
          alt="aarush tanwar"
          width={30}
          height={30}
        />
      </Link>

      <div className="flex space-x-8">
        <Link
          href="/projects"
          className="hover:text-accent transition-colors duration-150"
        >
          Projects
        </Link>
        <Link
          href="/blog"
          prefetch={true}
          className="hover:text-accent transition-colors duration-150"
        >
          Blog
        </Link>
        <Link
          href="mailto:tanwaraarush007@gmail.com"
          className="text-accent transition-colors duration-150 hover:underline hover:underline-offset-4 flex items-center gap-2"
        >
          <p>Contact</p>
          <ExternalLink size={14} />
        </Link>
      </div>
    </nav>
  )
}
