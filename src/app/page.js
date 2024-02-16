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
import GlobalSettlement from "@/components/GlobalSettlement";
import TrimNews from "@/components/TrimNews";
import WhyWeAre from "@/components/WhyWeAre";
import Representation from "@/components/Representation";
import California from "@/components/California";
import GetUpdated from "@/components/GetUpdated";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="bg-white">
        <NavBar />
        <Hero />
        <Victim />
        <WhyChooseUs />
        <BlogPost />
        <WhyWeAre />
        <Attorneys />
        <GlobalSettlement />
        <div className="relative">
          <div className="relative z-30">
            <Representation />
          <California />
          <TrimNews />
          </div>
          <div className="bg-harp h-[942px] w-full absolute left-0 lg:top-[40%] top-[25%] lg:translate-y-[-40%]"></div>
        </div>
        <GetUpdated />
        <Support />
        <Footer />
      </div>
    </>
  );
}
