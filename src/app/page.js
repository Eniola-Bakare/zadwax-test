import Composed from "./components/Composed";
import localFont from "next/font/local";

const aeonikFont = localFont({
  src: "../../public/fonts/AeonikProRegular.otf",
});
export default function Home() {
  return (
    <main
      className={`w-full min-w-[375px] ${aeonikFont.className} text- flex  bg-white items-start flex-shrink-0`}
    >
      <Composed />
    </main>
  );
}
