import Navbar from "@/components/navbar/navbar";
import Benefits from "@/components/benefits";

export const metadata = {
  title: "Benefits - Growpath",
  description: "Job Recommendation System",
};

export default function BenefitsPage() {
  return (
    <div>
      <Navbar />
      <Benefits />
    </div>
  );
}