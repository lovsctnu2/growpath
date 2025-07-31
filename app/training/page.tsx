import NavbarHome from "@/components/navbar/navbarHome";
import Training from "@/components/training";

export const metadata = {
  title: "About Us - Sun Eater",
  description: "Pelajari lebih lanjut tentang Sun Eater.",
};


export default function MentorPage() {
  return (
    <div>
        <NavbarHome/>
      <Training/>
    </div>
  );
}