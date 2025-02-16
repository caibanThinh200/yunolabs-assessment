import AboutUs from "@/components/blocks/About";
import ContactUs from "@/components/blocks/ContactUs";
import GridCard from "@/components/blocks/GridCard";
import Hero from "@/components/blocks/Hero";
import Testimonials from "@/components/blocks/Testimonials";
import VerticalCards from "@/components/blocks/VerticalCard";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <AboutUs />
      <GridCard />
      <VerticalCards />
      <Testimonials />
      <ContactUs />
    </main>
  );
}
