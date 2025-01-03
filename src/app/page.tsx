import Particles from "@/components/particles"
import { LucideBuilding, MapPinHouse } from "lucide-react"

export default function Home() {
  return (
    <div>
      <main>
        <div className="flex flex-col gap-4">
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
      </main>
      <Particles className="absolute inset-0 -z-50" quantity={150} />
    </div>
  )
}
