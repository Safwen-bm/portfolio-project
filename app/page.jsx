import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div
          className="flex flex-col xl:flex-row items-center justify-between
          xl:pt-8 xl:pb-16" 
        >
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none mb-8">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1">
              Hello I'm <br /> <span className="text-accent">Safwen BenMabrouk</span>
            </h1>
            <p className="max-w-[500px] mb-6 mx-auto xl:mx-0 text-white/80">
              I excel at crafting elegant digital experiences and I am
              proficient in various programming languages and technologies.
            </p>
            <div className="mb-6"> 
              <Stats />
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
        {/* buttons and socials */}
        <div className="flex flex-col xl:flex-row items-start xl:justify-start gap-6 mt-4">
          <Button
            variant="outline"
            size="lg"
            className="uppercase flex items-center gap-2 mb-4 xl:mb-0"
            style={{ transform: 'translateY(-0.5rem)' }} // Instead of margin-top, use transform to lift the button
          >
            <span>Download CV</span>
            <FiDownload className="text-xl" />
          </Button>
          <div>
            <Social
              containerStyles="flex gap-6"
              iconStyles="w-9 h-9 border border-accent rounded-full flex 
                  justify-center items-center text-accent text-base hover:bg-accent
                  hover:text-primary hover:transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;