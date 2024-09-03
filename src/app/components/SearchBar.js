import Image from "next/image";

export default function SearchBar() {
  return (
    <section className="w-full h-[72px] flex items-center justify-end gap-20 border-b-2 border-b-[#EAECF0] py-2 pr-10">
      <div className="w-[320px]">
        <input
          placeholder="Search..."
          className="w-full border p-2 rounded-l"
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
        <Image
          src={"/profile.png"}
          width={45}
          alt="notification btn"
          height={25}
        />
      </div>
    </section>
  );
}
