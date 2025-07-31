import Link from "next/link";
import Image from "next/image";
import NavlinkHome from "@/components/navbar/navlinkHome";

const navbarHome = () => {
  return (
    <div className="fixed py-12 px-12 w-full bg-white border-b border-black/58 z-20">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between">
            <Link href="/">
            <Image src="/logo.svg" width={337} height={83} alt="logo" priority></Image>
            </Link>
            <NavlinkHome />
        </div>
    </div>
  )
}

export default navbarHome
