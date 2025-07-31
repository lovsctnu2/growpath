import Image from "next/image";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="bg-tertier rounded-3xl shadow-xl w-[904px] h-[760px] border border-primary max-w-5xl overflow-hidden flex flex-col lg:flex-row pt-8">
        
        <div className=" lg:flex flex-col items-center justify-center lg:w-1/3 p-4 gap-4">
         <Image src="/element2.svg" width={289} height={666} alt="award" />
        </div>

         <div className="w-full lg:w-2/3 pt-8 flex flex-col justify-center">
          <h1 className="text-6xl font-extrabold text-black">Welcome!</h1> 
          
          <div className="flex flex-col">
            <button className="flex items-center justify-center text-2xl py-3 bg-button1 rounded-xl text-login font-medium hover:bg-gray-50 transition">
              <Image src="/google.png" width={30} height={30} alt="Google" />
              Continue with Google
            </button>
            <button className="flex items-center justify-center text-2xl py-3 bg-button1 rounded-xl text-login font-medium hover:bg-gray-50 transition">
              <Image src="/sso.png" width={60} height={29} alt="SSO" />
              Continue with SSO
            </button>
          </div>

            <div className="border border-primary mt-4">
            </div>

          <div className="flex flex-col ">
            <input 
              type="text" 
              placeholder="Username" 
              className="w-full py-6 px-10 border-2 border-button1 text-2xl font-medium bg-white rounded-xl focus:outline-none focus:border-primary"
            />
            <input 
              type="password" 
              placeholder="Password" 
              className="w-full py-6 px-10 border-2 border-button1 text-2xl font-medium bg-white rounded-xl focus:outline-none focus:border-primary"
            />
          </div>

          
<div className="flex flex-row">
    <div className="flex justify-items-start p-0 m-0">
        <input type="checkbox" id="rememberMe" className="ml-auto accent-primary" />
        <label htmlFor="rememberMe" className="text-xl underline text-black">Remember me</label>
    </div>
    <Link href="#" className="text-xl underline text-black text-normal hover:underline">Forgot password?</Link>
</div>

<div className="flex justify-center">
<button className="w-[236px] py-3 bg-primary text-white rounded-full font-bold text-lg hover:bg-blue-700 transition mb-6">
    Log in
</button>
</div>

          <div className="text-center text-sm text-gray-600">
            Don&apos;t have an account? <Link href="#" className="text-primary hover:underline">Sign up</Link>
          </div>
        </div>
      </div>

      <div className="mt-8 text-2xl font-semibold text-primary">
        Growpath.
      </div>
    </div>
  );
};

export default LoginPage;