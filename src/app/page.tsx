import Image from "next/image";
import HeroBanner from "./components/HomeComponents/HeroBanner";
import Heading from "./components/HomeComponents/Heading";


// Container for home page and home page components

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen w-screen">
      <Heading />
      <HeroBanner />
    </main>
  );
}
