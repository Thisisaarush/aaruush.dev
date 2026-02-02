import { ArrowUpRight } from "lucide-react"
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

      <div className="flex space-x-6">
        <Link
          href="/services"
          className="hover:text-accent transition-colors duration-150"
        >
          Services
        </Link>
        <Link
          href="/projects"
          className="hover:text-accent transition-colors duration-150"
        >
          Projects
        </Link>
        <Link
          href="/blogs"
          prefetch={true}
          className="hover:text-accent transition-colors duration-150"
        >
          Blogs
        </Link>
        <Link
          href="/contact"
          className="text-accent transition-colors duration-150 hover:underline hover:underline-offset-4 flex items-center gap-2 group"
        >
          <p>Contact</p>
          <ArrowUpRight
            size={14}
            className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-150"
          />
        </Link>
      </div>
    </nav>
  )
}
