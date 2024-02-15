import Attorneys from "@/components/Attorneys";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Support from "@/components/Support";
import Victim from "@/components/Victim";
import WhyChooseUs from "@/components/WhyChooseUs";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BlogPost from "@/components/BlogPost";

export default function Home() {
  return (
    <>
      <div className="bg-white">
        <NavBar />
        <Hero />
        <Victim />
        <WhyChooseUs />
        <BlogPost />
        <Attorneys />
        <Support />
      </div>
    </>
  );
}
