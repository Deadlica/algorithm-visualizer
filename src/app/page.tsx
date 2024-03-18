import Image from "next/image";
import Header from "./components/Header/page";
import BarArray from "./components/BarArray/page";

export default function Home() {
  return (
    <main>
      <Header />
      <BarArray />
    </main>
  );
}
