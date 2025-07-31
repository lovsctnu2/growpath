import NavbarHome from "@/components/navbar/navbarHome";
import Job from "@/components/job";

export const metadata = {
  title: "Job - Growpath",
  description: "Job Recommendation System",
};

export default function TestimonialsPage() {
  return (
    <div>
      <NavbarHome/>
      <Job/>
    </div>
  );
}