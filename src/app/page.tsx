import Image from "next/image";
import HeroBanner from "./components/HomeComponents/HeroBanner";
import Heading from "./components/HomeComponents/Heading";
import TileContainer from "./components/HomeComponents/TileContainer";


// Container for home page and home page components

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen w-screen mx-auto overflow-x-hidden">
      <Heading />
      <HeroBanner />
      <TileContainer />
    </main>
  );
}
