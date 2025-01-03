import Particles from "@/components/particles"
import { LucideBuilding, MapPinHouse } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div>
      <main className="flex flex-col gap-20">
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
      </main>
      <Particles className="absolute inset-0 -z-50" quantity={150} />
    </div>
  )
}
