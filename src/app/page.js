import Attorneys from "@/components/Attorneys";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Support from "@/components/Support";
import Victim from "@/components/Victim";

export default function Home() {
  return (
    <>
      <div className="bg-white">
        <NavBar />
        <Hero />
        <Victim />
        <Attorneys />
        <Support />
      </div>
    </>
  );
}
