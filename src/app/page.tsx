import Link from "next/link"
import Particles from "@/components/particles"
import { ArrowUpRight, LucideBuilding, MapPinHouse, Circle } from "lucide-react"
import { getPosts } from "@/lib/blog"
import Image from "next/image"
import { FeaturedProjects } from "@/components/featured-projects"

const posts = getPosts()
  ?.sort(
    (a, b) =>
      new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime(),
  )
  ?.slice(0, 4)

function formatDate(dateString: string) {
  return new Date(dateString)
    ?.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
    ?.toLowerCase()
}

export default function Home() {
  return (
    <div>
      <main className="flex flex-col gap-20">
        {/* Intro */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <Image
              src="/profile_photo.jpg"
              alt="Aarush Tanwar"
              width={80}
              height={80}
              className="rounded-full"
            />
            <span className="flex flex-col gap-1">
              <h1 className="text-3xl font-bold">Aarush Tanwar</h1>
              <div className="flex flex-col gap-1 text-sm">
                <span className="flex items-center gap-2 text-gray-400">
                  <LucideBuilding size={16} />
                  <p>SDE3 @ Rightpoint (Genpact)</p>
                </span>
                <span className="flex items-center gap-2 text-gray-400">
                  <MapPinHouse size={16} />
                  <p>Jaipur, Rajasthan, India</p>
                </span>
              </div>
            </span>
          </div>

          <p>
            I help startups and businesses build{" "}
            <span className="text-accent font-medium">
              scalable web applications
            </span>{" "}
            that drive growth. With 6+ years shipping production systems, I
            specialize in turning ideas into reliable, performant products using
            React, Next.js, Node.js, and AI integrations.
          </p>

          {/* Availability Status */}
          <div className="flex items-center gap-2 text-sm">
            <Circle
              size={8}
              className="fill-green-500 text-green-500 animate-pulse"
            />
            <span className="text-green-500 font-medium">
              Available for freelance projects
            </span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
            <Link
              href={"/contact"}
              className="flex items-center gap-2 bg-accent text-black font-medium px-4 py-2 hover:bg-accent/90 transition-colors"
            >
              Hire Me
              <ArrowUpRight size={14} />
            </Link>
            <Link
              href={"/Aarush_Tanwar_Resume.pdf"}
              target="_blank"
              className="flex items-center gap-2 border border-accent/50 text-accent px-4 py-2 hover:bg-accent/10 transition-colors"
            >
              Download Resume
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 text-sm text-gray-400 underline underline-offset-4">
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

          {/* Trust Signals */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500">
            <span className="flex items-center gap-1">
              ⚡ Typical response: under 24 hours
            </span>
            <span className="flex items-center gap-1">
              🌏 Timezone: IST (UTC+5:30)
            </span>
            <span className="flex items-center gap-1">
              💯 100% Job Success Rate
            </span>
          </div>
        </div>

        <hr className="border-gray-700 -my-10 border-dashed" />

        {/* Skills */}
        <div className="flex flex-col gap-8">
          <h2 className="text-2xl font-bold underline underline-offset-4 decoration-accent decoration-wavy">
            Tech Stack
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="border border-accent/10 p-4 hover:border-accent/30 transition-colors">
              <p className="text-accent text-xs font-medium mb-2">FRONTEND</p>
              <p className="text-sm text-gray-300">
                React, Next.js, TypeScript, Tailwind CSS, Redux
              </p>
            </div>
            <div className="border border-accent/10 p-4 hover:border-accent/30 transition-colors">
              <p className="text-accent text-xs font-medium mb-2">BACKEND</p>
              <p className="text-sm text-gray-300">
                Node.js, Express, Python, PostgreSQL, MongoDB
              </p>
            </div>
            <div className="border border-accent/10 p-4 hover:border-accent/30 transition-colors">
              <p className="text-accent text-xs font-medium mb-2">AI / ML</p>
              <p className="text-sm text-gray-300">
                OpenAI, Gemini, LangChain, RAG, Vector DBs
              </p>
            </div>
            <div className="border border-accent/10 p-4 hover:border-accent/30 transition-colors">
              <p className="text-accent text-xs font-medium mb-2">DEVOPS</p>
              <p className="text-sm text-gray-300">
                Docker, Kubernetes, AWS, CI/CD, Redis
              </p>
            </div>
          </div>

          {/* GitHub Contribution Graph */}
          <div className="mt-2">
            <p className="text-accent text-xs font-medium mb-3">
              GITHUB ACTIVITY
            </p>
            <Link
              href="https://github.com/thisisaarush"
              target="_blank"
              className="block hover:opacity-80 transition-opacity"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://ghchart.rshah.org/00EAFF/thisisaarush"
                alt="GitHub Contribution Graph"
                className="w-full max-w-5xl"
              />
            </Link>
          </div>
        </div>

        <hr className="border-gray-700 -my-10 border-dashed" />

        {/* Work */}
        <div className="flex flex-col gap-8">
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
                Rightpoint (Genpact)
              </h3>
              <p className="text-gray-400 text-sm">
                Software Engineer 3 (January 2022 - Present)
              </p>
            </span>
            <p>
              Leading full-stack development of an enterprise SaaS platform
              serving 50K+ users. Architected real-time chat system reducing
              response time by 40%, built product management modules, and
              mentored junior developers. Tech: React, Node.js, TypeScript,
              PostgreSQL, Redis.
            </p>
          </Link>
          <Link href={"/services"} className="flex flex-col gap-2 group">
            <span>
              <h3 className="text-lg font-bold group-hover:text-accent">
                Freelance
              </h3>
              <p className="text-gray-400 text-sm">
                Full Stack Developer (September 2019 - December 2021)
              </p>
            </span>
            <p>
              Delivered 15+ projects for startups and SMBs across e-commerce,
              fintech, and social platforms. Built custom solutions that
              processed $500K+ in transactions. Specialized in Stripe/Razorpay
              integrations, microservices architecture, and performance
              optimization.
            </p>
          </Link>
        </div>

        <hr className="border-gray-700 -my-10 border-dashed" />

        {/* Testimonials */}
        <div className="flex flex-col gap-8">
          <h2 className="text-2xl font-bold underline underline-offset-4 decoration-accent decoration-wavy">
            What Clients Say
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-accent/10 p-6 hover:border-accent/30 transition-colors">
              <p className="text-gray-300 mb-4 italic">
                &quot;Aarush helped us modernize our e-commerce platform during
                a critical period. His expertise in Next.js and microservices
                architecture significantly improved our page load times and
                checkout experience. The real-time inventory sync he built
                handled our peak holiday traffic flawlessly.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">
                  DM
                </div>
                <div>
                  <p className="font-medium text-white">David Mitchell</p>
                  <p className="text-sm text-gray-400">
                    Senior Engineering Manager, Raymour & Flanigan
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-accent/10 p-6 hover:border-accent/30 transition-colors">
              <p className="text-gray-300 mb-4 italic">
                &quot;Working with Aarush on the BEES platform was a great
                experience. He developed key features for our B2B ordering
                system that retailers use daily. His understanding of real-time
                pricing updates and order management workflows made a real
                impact on our delivery schedules.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">
                  JR
                </div>
                <div>
                  <p className="font-medium text-white">Jennifer Rodriguez</p>
                  <p className="text-sm text-gray-400">
                    Product Lead, MyBees (AB InBev)
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-accent/10 p-6 hover:border-accent/30 transition-colors">
              <p className="text-gray-300 mb-4 italic">
                &quot;Aarush is one of the most reliable engineers on our team.
                His work on enterprise digital experiences for clients like
                Cadillac and Boston Dynamics showcased his ability to deliver
                complex, AI-powered solutions. He consistently brings innovative
                ideas to the table.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">
                  KP
                </div>
                <div>
                  <p className="font-medium text-white">Kevin Patel</p>
                  <p className="text-sm text-gray-400">
                    Technical Architect, Rightpoint (Genpact)
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-accent/10 p-6 hover:border-accent/30 transition-colors">
              <p className="text-gray-300 mb-4 italic">
                &quot;As a non-technical founder, I was nervous about hiring a
                developer. Aarush explained everything clearly, delivered on
                time, and the MVP he built helped us raise our seed round. He
                even documented everything so our new team could take over
                easily.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">
                  AP
                </div>
                <div>
                  <p className="font-medium text-white">Ananya Patel</p>
                  <p className="text-sm text-gray-400">
                    Founder, HealthTrack Startup
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-gray-700 -my-10 border-dashed" />

        {/* Projects */}
        <div className="flex flex-col gap-8">
          <h2 className="text-2xl font-bold underline underline-offset-4 decoration-accent decoration-wavy">
            Projects
          </h2>

          <FeaturedProjects />
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

        <hr className="border-gray-700 -my-10 border-dashed" />

        {/* Blog */}
        <div className="flex flex-col gap-8">
          <h2 className="text-2xl font-bold underline underline-offset-4 decoration-accent decoration-wavy">
            Blogs
          </h2>
          <div className="space-y-4">
            {posts?.map((post, index) => (
              <div
                key={index}
                className="flex justify-between items-center group"
              >
                <Link
                  href={`/blogs/${post.slug}`}
                  className="text-gray-200 hover:text-accent transition-colors duration-200"
                >
                  {post.metadata.title.toLowerCase()}
                </Link>
                <span className="text-sm text-gray-400">
                  {formatDate(post.metadata.date)}
                </span>
              </div>
            ))}
          </div>
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

        {/* CTA Section */}
        <div className="border border-accent/30 bg-accent/5 p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">
            Let&apos;s Build Something Great
          </h2>
          <p className="text-gray-400 mb-6 max-w-lg mx-auto">
            Have a project in mind? I&apos;m available for freelance work and
            always excited to tackle new challenges. Let&apos;s talk about your
            ideas.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent text-black font-bold px-6 py-3 hover:bg-accent/90 transition-colors group"
            >
              Start a Conversation
              <ArrowUpRight
                size={16}
                className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 border border-accent/50 text-accent font-medium px-6 py-3 hover:bg-accent/10 transition-colors"
            >
              View Services & Pricing
            </Link>
          </div>
        </div>
      </main>
      <Particles className="absolute inset-0 -z-50" quantity={150} />
    </div>
  )
}
