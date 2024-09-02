import Image from "next/image";

export default function SearchBar() {
  return (
    <section className="w-full border-b-slate-300">
      <input placeholder="Search..." />

      <div>
        <Image
          src={"/Notification.png"}
          width={15}
          alt="notification btn"
          height={15}
        />
        <Image
          src={"/profile.png"}
          width={25}
          alt="notification btn"
          height={25}
        />
      </div>
    </section>
  );
}
