import Image from "next/image";
import Link from "next/link";

const Testimonials = () => {
  return (
    <div className="relative h-screen text-black flex flex-col items-center justify-center">
      <div className="container mx-auto pt-[251px] px-4">
        <div className="text-start mb-6">
          <h1 className="text-6xl font-bold leading-tight justify-items-start">
            What Our Client Says About Us!
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row justify-center mx-[109px] gap-8">
          <div className="bg-tertier border border-primary rounded-4xl w-[385px] h-[224px] text-black p-8 flex flex-col gap-4 [box-shadow:0_4px_4px_0_rgba(0,0,0,0.25)]">
            <div className="flex flex-row gap-2 justify-start items-start">
              <Image
                src="/elipse.svg"
                width={47}
                height={47}
                alt="profil"
              />
              <div className="flex flex-col">
                <h3 className="text-primary text-2xl text-start font-bold">Name</h3>
                <h4 className="text-gray-700 text-sm text-start font-light">Occupation</h4>
              </div>
            </div>
            <p className="text-lg text-start w-[339px] h-[121px] leading-0 leading-tight">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis erat mattis, pharetra sapien nec, rutrum lectus. Maecenas sed magna ac velit rutrum viverra a eu quam.
            </p>
          </div>

          <div className="bg-tertier border border-primary rounded-4xl w-[385px] h-[224px] text-black p-8 flex flex-col gap-4 [box-shadow:0_4px_4px_0_rgba(0,0,0,0.25)]">
            <div className="flex flex-row gap-2 justify-start items-start">
              <Image
                src="/elipse.svg"
                width={47}
                height={47}
                alt="profil"
              />
              <div className="flex flex-col">
                <h3 className="text-primary text-2xl text-start font-bold">Name</h3>
                <h4 className="text-gray-700 text-sm text-start font-light">Occupation</h4>
              </div>
            </div>
            <p className="text-lg text-start w-[339px] h-[121px] leading-0 leading-tight">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis erat mattis, pharetra sapien nec, rutrum lectus. Maecenas sed magna ac velit rutrum viverra a eu quam.
            </p>
          </div>

          <div className="bg-tertier border border-primary rounded-4xl w-[385px] h-[224px] text-black p-8 flex flex-col gap-4 [box-shadow:0_4px_4px_0_rgba(0,0,0,0.25)]">
            <div className="flex flex-row gap-2 justify-start items-start">
              <Image
                src="/elipse.svg"
                width={47}
                height={47}
                alt="profil"
              />
              <div className="flex flex-col">
                <h3 className="text-primary text-2xl text-start font-bold">Name</h3>
                <h4 className="text-gray-700 text-sm text-start font-light">Occupation</h4>
              </div>
            </div>
            <p className="text-lg text-start w-[339px] h-[121px] leading-0 leading-tight">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis erat mattis, pharetra sapien nec, rutrum lectus. Maecenas sed magna ac velit rutrum viverra a eu quam.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justiy-start">
          <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Get Early Access!</h1>
            <p className="text-lg mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis erat mattis, pharetra sapien nec, rutrum lectus. Maecenas sed magna ac velit rutrum viverra a eu quam.</p>
            <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center lg:justify-start">
              <Link href="#" className="py-3 px-8 bg-primary text-white w-fit text-lg md:text-xl font-bold rounded-full transition">
                Sign up now
              </Link>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <Image
              src="/work.svg"
              width={500}
              height={500}
              alt="People working on a laptop"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;