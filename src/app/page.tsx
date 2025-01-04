import Particles from "@/components/particles"
import { ArrowUpRight, LucideBuilding, MapPinHouse } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div>
      <main className="flex flex-col gap-20">
        {/* Intro */}
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl font-bold">Aarush Tanwar</h1>

          <div className="flex flex-col gap-1">
            <span className="flex items-center gap-2 text-gray-400">
              <LucideBuilding size={16} />
              <p>SDE3 @ Rightpoint (Genpact)</p>
            </span>
            <span className="flex items-center gap-2 text-gray-400">
              <MapPinHouse size={16} />
              <p>Jaipur, Rajasthan, India</p>
            </span>
          </div>

          <p>
            I&apos;m a software engineer with over 5 years of experience who
            loves building scalable and efficient web apps. I mostly work with
            Typescript, React, Node.js, MongoDB, and PostgreSQL. In my free
            time, I like playing video games and do some photography.
          </p>
        </div>

        {/* Work */}
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold underline underline-offset-4 decoration-accent decoration-wavy">
            Work
          </h2>

          <Link
            href={"https://www.rightpoint.com/"}
            target="_blank"
            className="flex flex-col gap-2 group"
          >
            <span>
              <h3 className="text-lg font-bold group-hover:text-accent">
                Rightpoint
              </h3>
              <p className="text-gray-400 text-sm">
                Software Engineer 3 (January 2022 - Present)
              </p>
            </span>
            <p>
              Working as a full-stack developer on a project with live chat
              features and product management. I&apos;m responsible for
              designing and developing new features, fixing bugs, and improving
              the performance of the application.
            </p>
          </Link>
          <Link href={"/"} className="flex flex-col gap-2 group">
            <span>
              <h3 className="text-lg font-bold group-hover:text-accent">
                Freelance
              </h3>
              <p className="text-gray-400 text-sm">
                Full Stack Developer (September 2019 - December 2021)
              </p>
            </span>
            <p>
              Worked on multiple projects including e-commerce websites, social
              media platforms, and business websites. Built RESTful APIs,
              integrated payment gateways like Stripe and Razorpay and built
              complex frontends etc.
            </p>
          </Link>
        </div>

        {/* Projects */}
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold underline underline-offset-4 decoration-accent decoration-wavy">
            Projects
          </h2>

          <Link
            href={"https://github.com/Thisisaarush/scalable-ecommerce-backend"}
            target="_blank"
            className="flex flex-col gap-2 group"
          >
            <span>
              <h3 className="text-lg font-bold group-hover:text-accent">
                Scalable E-Commerce Backend | 30+ ⭐ Stars on GitHub
              </h3>
              <p className="text-gray-400 text-sm">
                Tech Stack - Node.js, Express.js, MongoDB, Docker, Nginx,
                Kubernetes, Stripe
              </p>
            </span>
            <p>
              Developed a scalable e-commerce backend with microservices,
              ensuring reliability, fault tolerance, and efficient deployments.
            </p>
          </Link>
          <Link
            href={"https://github.com/Thisisaarush/url-shortening-service"}
            className="flex flex-col gap-2 group"
          >
            <span>
              <h3 className="text-lg font-bold group-hover:text-accent">
                URL Shortening Service
              </h3>
              <p className="text-gray-400 text-sm">
                Tech Stack - Node.js, Express.js, Redis, Docker, MongoDB, Morgan
              </p>
            </span>
            <p>
              A URL shortening service with features including URL shortening,
              redirection, updating, and deletion, along with caching using
              Redis and rate limiting for performance optimization.
            </p>
          </Link>
          <Link
            href={"https://shoez-store.vercel.app/"}
            className="flex flex-col gap-2 group"
          >
            <span>
              <h3 className="text-lg font-bold group-hover:text-accent">
                Shoez-Store
              </h3>
              <p className="text-gray-400 text-sm">
                Tech Stack - Typescript, React, Next.js, Tailwind CSS, Node.js,
                Express.js, MongoDB, Zustand, GraphQL, Framer Motion, Prisma,
                RazorPay
              </p>
            </span>
            <p>
              A full-stack e-commerce website with features like product
              management, user authentication, cart management, and payment
              gateway integration.
            </p>
          </Link>
          <Link
            href={"/projects"}
            className="flex items-center gap-2 group text-accent hover:underline hover:underline-offset-4 w-fit"
          >
            <p>All Projects</p>
            <ArrowUpRight
              size={14}
              className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-150"
            />
          </Link>
        </div>

        {/* Blog */}
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold underline underline-offset-4 decoration-accent decoration-wavy">
            Blog
          </h2>
          <Link
            href={"/blogs"}
            className="flex items-center gap-2 group text-accent hover:underline hover:underline-offset-4 w-fit"
          >
            <p>All Blogs</p>
            <ArrowUpRight
              size={14}
              className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-150"
            />
          </Link>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold underline underline-offset-4 decoration-accent decoration-wavy">
            Links
          </h2>
          <div className="flex items-center gap-4">
            <Link
              href={"https://www.github.com/thisisaarush"}
              target="_blank"
              className="flex items-center gap-2 group hover:text-accent"
            >
              GitHub
            </Link>
            <Link
              href={"https://www.linkedin.com/in/thisisaarush"}
              target="_blank"
              className="flex items-center gap-2 group hover:text-accent"
            >
              LinkedIn
            </Link>
            <Link
              href={"https://x.com/Thisisaarush"}
              target="_blank"
              className="flex items-center gap-2 group hover:text-accent"
            >
              Twitter
            </Link>
          </div>
        </div>
      </main>
      <Particles className="absolute inset-0 -z-50" quantity={150} />
    </div>
  )
}
