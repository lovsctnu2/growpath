import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
     <div className="relative h-screen text-black">
        <div className="container mx-auto flex flex-col lg:flex-row ">
          <div className=" lg:text-left lg:mb-0">

            <h1 className="text-6xl font-bold leading-tight pt-[252px] lg:leading-[60px]">About <span className="text-primary">Growpath</span>
            </h1>
            <p className=" text-2xl text-black w-[786px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis erat mattis, pharetra sapien nec, rutrum lectus. Maecenas sed magna ac velit rutrum viverra a eu quam. Cras auctor sagittis nisi. Vivamus a tortor bibendum, iaculis mauris non, bibendum ante. Vivamus egestas scelerisque leo eget volutpat. In et nibh ut erat tincidunt pellentesque nec nec turpis. Vestibulum a erat at libero venenatis porttitor quis ut velit. Cras vestibulum, enim eu tristique hendrerit, tellus magna elementum magna, ut efficitur felis mi scelerisque orci. Sed tristique id eros id auctor. Cras tincidunt tristique justo a ornare. Donec vel sem bibendum, laoreet quam quis, commodo tortor. Phasellus at ante nec diam pellentesque aliquam a at nisi.
            </p>

          <div className="mt-12 flex flex-col md:flex-row gap-4 justify-center text-center lg:justify-start">
            <Link href="#" className="py-3 px-8 bg-primary text-white w-59 text-2xl font-bold rounded-full transition inline-block">
            Get started
            </Link>
            <Link href="#" className="py-3 px-8 border border-primary text-primary w-59 text-2xl font-bold rounded-full hover:bg-blue-50 transition inline-block">
            Learn more
            </Link>
        </div>
          </div>
<div className="w-full flex pt-[216px] justify-center lg:justify-end ">
            <Image 
              src="/element.svg" 
              width={305} 
              height={720} 
              alt="Career Advice" 
              priority 
            />
          </div>
        </div>
    </div>
  );
};

export default About