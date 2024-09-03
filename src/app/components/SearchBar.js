import Image from "next/image";
import { IoSearch } from "react-icons/io5";

export default function SearchBar() {
  return (
    <section className="w-full h-[72px] flex items-center justify-end gap-20 border-b-2 border-b-[#EAECF0] py-2 pr-10">
      <div className="relative w-[320px]">
        <div>
          <IoSearch className="absolute left-3 top-3 text-gray500" />
        </div>

        <input
          placeholder="Search..."
          className="w-full border p-2 pl-9 rounded-l focus:outline-primaryColor text-gray500 placeholder:text-sm placeholder:font-extralight"
        />
      </div>
      <div className="flex gap-6">
        <div className="flex justify-center items-center">
          <Image
            src={"/Notification.png"}
            width={25}
            alt="notification btn"
            height={20}
          />
        </div>
        <div className="w-[40px]">
          <Image
            src={"/profile.png"}
            width={1000}
            alt="notification btn"
            height={0}
          />
        </div>
      </div>
    </section>
  );
}
