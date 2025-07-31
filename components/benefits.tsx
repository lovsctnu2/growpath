import Image from "next/image";
import Link from "next/link";

const Benefits = () => {
  return (
    <div className="relative h-screen text-black flex flex-col items-center justify-center">
      <div className="container mx-auto px-4 lg:px-0">

        <div className="text-center mb-6">
          <h1 className="text-6xl font-bold leading-tight pt-[252px] lg:leading-[60px]">
            Benefits of Choosing <span className="text-primary">Growpath.</span>
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center ">

          <div className="bg-primary rounded-4xl w-[346px] h-[568px] text-white p-8">
            <div className="flex justify-center">
              <Image 
                src="/globe.svg" 
                width={108} 
                height={109} 
                alt="Globe Icon" 
              />
            </div>
            <h3 className="text-2xl text-center font-bold">Learn more</h3>
            <p className="text-sm text-center px-5 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis erat mattis, pharetra sapien nec, rutrum lectus. Maecenas sed magna ac velit rutrum viverra a eu quam. Cras auctor sagittis nisi. Vivamus a tortor bibendum, iaculis mauris non, bibendum ante. Vivamus egestas scelerisque leo eget volutpat. In et nibh ut erat tincidunt pellentesque nec nec turpis. Vestibulum a erat at libero venenatis porttitor quis ut velit. Cras vestibulum, enim eu tristique.
            </p>
          </div>

          <div className="bg-primary rounded-4xl w-[346px] h-[568px] text-white p-8">
            <div className="flex justify-center">
              <Image 
                src="/globe.svg" 
                width={108} 
                height={109} 
                alt="Globe Icon" 
              />
            </div>
            <h3 className="text-2xl text-center font-bold">Learn more</h3>
            <p className="text-sm text-center px-5 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis erat mattis, pharetra sapien nec, rutrum lectus. Maecenas sed magna ac velit rutrum viverra a eu quam. Cras auctor sagittis nisi. Vivamus a tortor bibendum, iaculis mauris non, bibendum ante. Vivamus egestas scelerisque leo eget volutpat. In et nibh ut erat tincidunt pellentesque nec nec turpis. Vestibulum a erat at libero venenatis porttitor quis ut velit. Cras vestibulum, enim eu tristique.
            </p>
          </div>

          <div className="bg-primary rounded-4xl w-[346px] h-[568px] text-white p-8">
            <div className="flex justify-center">
              <Image 
                src="/globe.svg" 
                width={108} 
                height={109} 
                alt="Globe Icon" 
              />
            </div>
            <h3 className="text-2xl text-center font-bold">Learn more</h3>
            <p className="text-sm text-center px-5 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis erat mattis, pharetra sapien nec, rutrum lectus. Maecenas sed magna ac velit rutrum viverra a eu quam. Cras auctor sagittis nisi. Vivamus a tortor bibendum, iaculis mauris non, bibendum ante. Vivamus egestas scelerisque leo eget volutpat. In et nibh ut erat tincidunt pellentesque nec nec turpis. Vestibulum a erat at libero venenatis porttitor quis ut velit. Cras vestibulum, enim eu tristique.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;