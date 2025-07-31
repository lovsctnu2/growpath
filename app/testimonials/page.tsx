import Navbar from "@/components/navbar/navbar";
import Testimonials from "@/components/testimonials";

export const metadata = {
  title: "Testimonial Page",
  description: "What They Said about Growpath",
};

export default function TestimonialsPage() {
  return (
    <div>
      <Navbar />
      <Testimonials/>
    </div>
  );
}