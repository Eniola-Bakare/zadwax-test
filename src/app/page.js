import Image from "next/image";
import Menu from "./components/Menu";
import MainContent from "./components/MainContent";

export default function Home() {
  return (
    <main className=" flex max-w-[1512px] w-[1512px] h-dvh items-start flex-shrink-0">
      <Menu />
      <MainContent />
    </main>
  );
}
