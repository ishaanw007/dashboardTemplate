import { LogoIcon } from "./Icons";
import Image from "next/image";
import timekeeper from "@/../public/timekeeperlogo.png";

export const Footer = () => {
  return (
    <footer id="footer" >
      <hr className="w-11/12 mx-auto"  />

      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2">
          <a
            href="/"
            className="font-bold text-xl flex"
          >
              <Image src={timekeeper} alt="logo" width={80} ></Image>
              <div className="my-auto">

           Timekeeper
              </div>
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Follow US</h3>
          <div>
            <a
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Github
            </a>
          </div>

          <div>
            <a
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Twitter
            </a>
          </div>

          <div>
            <a
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Dribbble
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Platforms</h3>
          <div>
            <a
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Web
            </a>
          </div>

          <div>
            <a
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Mobile
            </a>
          </div>

          <div>
            <a
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Desktop
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">About</h3>
          <div>
            <a
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Features
            </a>
          </div>

          <div>
            <a
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Pricing
            </a>
          </div>

          <div>
            <a
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              FAQ
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Help</h3>
          <div>
            <a
              href="/privacypolicy"
              className="opacity-60 hover:opacity-100"
            >
              Privacy Policy
            </a>
          </div>

          <div>
            <a
              href="/termsandconditions"
              className="opacity-60 hover:opacity-100"
            >
              Terms and Conditions
            </a>
          </div>

          <div>
            <a
              href="/contactus"
              className="opacity-60 hover:opacity-100"
            >
              Contact Us
            </a>
          </div>
          <div>
            <a
              href="/support"
              className="opacity-60 hover:opacity-100"
            >
               Support
            </a>
          </div>
        </div>
      </section>

      <section className="container pb-14 text-center">
        <h3>
          &copy; 2024 by Devzilla{" "}
          <a
            target="_blank"
            href="https://github.com/leoMirandaa"
            className="text-primary transition-all border-primary hover:border-b-2"
          >
            {/* Leo Miranda */}
          </a>
        </h3>
      </section>
    </footer>
  );
};
