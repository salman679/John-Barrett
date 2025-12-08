import Hero from "@/components/sections/Hero";
import ValueProposition from "@/components/sections/ValueProposition";
import Services from "@/components/sections/Services";
import Transformation from "@/components/sections/Transformation";
import Testimonials from "@/components/sections/Testimonials";
import Stats from "@/components/sections/Stats";
import CallToAction from "@/components/sections/CallToAction";
import FeaturedInsights from "@/components/sections/FeaturedInsights";

export default function Home() {
  return (
    <>
      <Hero />
      <ValueProposition />
      <Stats />
      <Services />
      <Transformation />
      <Testimonials />
      <FeaturedInsights />
      <CallToAction />
    </>
  );
}
