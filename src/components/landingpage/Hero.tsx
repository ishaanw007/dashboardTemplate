import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import { HeroCards } from "./HeroCards";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import dashboard from "../../../public/dashboard.png"
import view from "../../../public/view.png"
import table from "../../../public/table.png"
import geo from "../../../public/geo.png"
import Link from "next/link";
export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-3 place-items-center py-20 md:py-32 gap-28 text-white">
      <div className="text-center lg:text-start space-y-6 col-span-3 ">
        <main className="text-3xl md:text-4xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
              Timekeeper
            </span>{" "}
            Empowering your
          </h1>{" "}
          Workforce,
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
           Every
            </span>{" "}
            second counts
          </h2>
        </main>

        {/* <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Build your React landing page effortlessly with the required sections
          to your project.
        </p> */}

        <div className="space-y-4 md:space-y-0 md:space-x-4 w-full mx-auto justify-center flex" >
          {/* <Button asChild className="w-full md:w-1/3"> <Link href="/login">Get Started</Link></Button> */}
          <Button asChild>
      <Link href="/login">Get Started</Link>
    </Button>
          {/* <a
            href="https://github.com/leoMirandaa/shadcn-landing-page.git"
            target="_blank"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            Github Repository
            <GitHubLogoIcon className="ml-2 w-5 h-5" />
          </a> */}
        </div>
      </div>
    
      {/* Hero cards sections */}
      {/* <div className="z-10">
        <HeroCards  />
      </div> */}
      <div className=" col-span-3">
      <div className="grid grid-cols-2 gap-4">
        <div className="outline outline-1 col-span-3 rounded-xl shadow-2xl">


      <Image src={dashboard} alt="dashboard" width={1050} className="rounded-xl"></Image>
        </div>
        <div className="outline outline-1 col-span-3 rounded-xl shadow-2xl">


      <Image src={view} alt="dashboard" width={1050} className="rounded-xl"></Image>
        </div>
        <div className="outline outline-1 col-span-3 rounded-xl shadow-2xl">


     


      <Image src={geo} alt="dashboard" width={1050} className="rounded-xl"></Image>
        </div>

        </div>  

      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
