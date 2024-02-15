import Attorneys from "@/components/Attorneys";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Support from "@/components/Support";
import Victim from "@/components/Victim";
import WhyChooseUs from "@/components/WhyChooseUs";
// Import Swiper styles
// import "swiper/swiper.min.css";
// import "swiper/components/navigation/navigation.min.css";

export default function Home() {
  return (
    <>
      <div className="bg-white">
        <NavBar />
        <Hero />
        <Victim />
        <WhyChooseUs />
        <Attorneys />
        <Support />
      </div>
    </>
  );
}
