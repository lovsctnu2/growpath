import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
     <div className="relative h-screen text-black">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center">
          <div className=" lg:text-left lg:mb-0">

            <h1 className="text-[80px] font-extrabold leading-tight pt-[250px] lg:leading-[80px] lg:mr-[-15rem]">Your Online Platform <br />for <span className="text-primary">Career Advice and Planning</span> Journey
            </h1>
            <p className=" text-lg text-gray-700">Descriptionsssssssssssssssssss
            </p>

          <div className="mt-12 flex flex-col md:flex-row gap-4 justify-center text-center lg:justify-start">
            <Link href="/login" className="py-3 px-8 bg-primary text-white w-59 text-2xl font-bold rounded-full transition inline-block">
            Get started
            </Link>
            <Link href="/about" className="py-3 px-8 border border-primary text-primary w-59 text-2xl font-bold rounded-full hover:bg-blue-50 transition inline-block">
            Learn more
            </Link>
        </div>
        
            <div className="flex flex-col md:flex-row py-4 ml-0 gap-6 items-center">
  <Image src="/badge.svg" width={243} height={57} alt="award" />
  <Image src="/users.svg" width={110} height={68} alt="users" />
</div>
          </div>
<div className="w-full flex pt-[248px] justify-center lg:justify-end ">
            <Image 
              src="/dashboard.svg" 
              width={541} 
              height={680} 
              alt="Career Advice" 
              priority 
            />
          </div>
        </div>
    </div>
  );
};

export default Hero