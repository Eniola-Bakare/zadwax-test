import Menu from "./components/Menu";
import MainContent from "./components/MainContent";
import Composed from "./components/Composed";
import localFont from "next/font/local";

const aeonikFont = localFont({
  src: "../../public/fonts/AeonikProRegular.otf",
});
export default function Home() {
  return (
    <main
      className={`${aeonikFont.className} text- flex w-full h-full bg-white items-start flex-shrink-0`}
    >
      <Composed />
    </main>
  );
}
