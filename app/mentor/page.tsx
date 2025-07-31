import NavbarHome from "@/components/navbar/navbarHome";
import Mentor from "@/components/mentor";

export const metadata = {
  title: "Mentor - Growpath",
  description: "Job Recommendation System",
};

export default function MentorPage() {
  return (
    <div>
      <NavbarHome/>
      <Mentor/>
    </div>
  );
}