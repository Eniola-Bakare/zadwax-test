import Menu from "./components/Menu";
import MainContent from "./components/MainContent";
import AddOns from "./components/AddOns";
import localFont from "next/font/local";

const aeonikFont = localFont({
  src: "../../public/fonts/AeonikProRegular.otf",
});
export default function Home() {
  return (
    <main
      className={`${aeonikFont.className} text- flex w-full max-w-[1440px] h-full items-start flex-shrink-0`}
    >
      <AddOns />
      <Menu />
      <MainContent />
    </main>
  );
}
