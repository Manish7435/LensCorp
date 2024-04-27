import AboutUs from "@/components/AboutUs";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TrueAI from "@/components/TrueAI";
import Why from "@/components/WhyChoose";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  text-left w-full ">
     <Hero/>
     <AboutUs/>
     <Services/>
     <TrueAI/>
     <Why/>
    </main>
  );
}
