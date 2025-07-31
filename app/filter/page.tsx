import NavbarHome from "@/components/navbar/navbarHome";
import Training from "@/components/training";

export const metadata = {
  title: "filter - Growpath",
  description: "Job Recommendation System",
};

export default function filterPage() {
  return (
    <div>
        <NavbarHome/>
      <Training/>
    </div>
  );
}