import AboutUs from "@/components/AboutUs";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  text-left w-full ">
     <Hero/>
     <AboutUs/>
    </main>
  );
}
