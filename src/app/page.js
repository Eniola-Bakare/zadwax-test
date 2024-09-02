import Image from "next/image";
import Menu from "./components/Menu";
import MainContent from "./components/MainContent";
import AddOns from "./components/AddOns";

export default function Home() {
  return (
    <main className=" flex w-full max-w-[1440px] h-dvh items-start flex-shrink-0">
      <AddOns />
      <Menu />
      <MainContent />
    </main>
  );
}
