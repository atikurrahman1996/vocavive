import Navbar from "../../Components/Shared/Navbar";
import EnrollCTABar from "./section/EnrollCTABar";
import Featured from "./section/Featured";
import Hero from "./section/Hero";
import MediaSection from "./section/MediaSection";
import PreviewSection from "./section/PreviewSection";
import ResourceSection from "./section/ResourceSection";
import Testimonial from "./section/Testimonial";
import WhyUs from "./section/WhyUs";

const Vocavive = () => {
  return (
    <div>
      <header className="productHeroBg">
        <Navbar />
        <Hero />
      </header>
      <EnrollCTABar />
      <PreviewSection />
      <WhyUs />
      <ResourceSection />
      <Featured />
      <Testimonial />
      <MediaSection />
    </div>
  );
};

export default Vocavive;
