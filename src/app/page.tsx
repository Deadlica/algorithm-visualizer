import Image from "next/image";
import Header from "./components/Header/Header";
import BarArray from "./components/BarArray/BarArray";

export default function Home() {
  return (
    <main>
      <Header />
      <BarArray />
    </main>
  );
}
