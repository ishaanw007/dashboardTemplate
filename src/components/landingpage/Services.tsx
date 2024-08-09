import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MagnifierIcon, WalletIcon, ChartIcon } from "./Icons";
import cubeLeg from "../../assets/cube-leg.png";
import Image from "next/image";
interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Custom Changes",
    description:
      "At our company, we understand that off-the-shelf solutions may not always meet your specific business needs. That's why we offer custom changes tailored to your requirements. Whether it's modifying existing software, integrating new features, or developing bespoke solutions from scratch, our team of experts is here to help you achieve your goals.",      
    icon: <ChartIcon />,
  },
  {
    title: "Project Management",
    description:
      "Effective project management is crucial for the success of any endeavor. Our experienced project managers ensure that your projects are delivered on time, within budget, and according to your specifications. We use proven methodologies and best practices to streamline processes, mitigate risks, and maximize efficiency.",
    icon: <WalletIcon />,
  },
  {
    title: "Task Automation",
    description:
      "Automating repetitive tasks can save time, reduce errors, and improve productivity. Our task automation solutions leverage cutting-edge technologies to automate routine processes, freeing up your team to focus on more valuable activities. From data entry to report generation, we can help streamline your workflows and optimize your operations",
    icon: <MagnifierIcon />,
  },
];

export const Services = () => {
  return (
    <section id="services" className="container py-24 sm:py-32">
      <div className=" place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Client-Centric{" "}
            </span>
            Services
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8 ">
          Our client-centric services are designed to cater to your unique needs and requirements. We prioritize understanding your business goals and delivering solutions that align perfectly with your vision. From initial consultation to final implementation, we are committed to providing you with exceptional service and support every step of the way.
          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* <Image
          src={cubeLeg}
          className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
          alt="About services"
        /> */}
      </div>
    </section>
  );
};
