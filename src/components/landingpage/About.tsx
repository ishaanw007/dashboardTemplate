import { Statistics } from "./Statistics";
import owner from "@/../public/owner.png";
import Image from "next/image";

export const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-32 ">
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <Image
            src={owner}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  About{" "}
                </span>
                Company
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                Welcome to Devzilla, a premier software development firm
                dedicated to delivering industry-specific, customized solutions
                from inception to implementation. With a distinguished team
                possessing extensive domain expertise, we specialize in crafting
                bespoke software tailored to meet your organization exact
                requirements. Our commitment to excellence ensures that we not
                only meet but surpass your expectations, empowering your
                business with cutting-edge technology designed to optimize
                efficiency and drive growth. At Devzilla, we pride ourselves on
                our professionalism and unwavering dedication to delivering
                innovative solutions that propel your industry forward.
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
