import Navbar from "@/components/navbar/navbar";
import About from "@/components/about";

export const metadata = {
  title: "About Us - Growpath",
  description: "Job Recommendation System",
};

export default function AboutPage() {
  return (
    <div>
      <Navbar />
      <About />
    </div>
  );
}