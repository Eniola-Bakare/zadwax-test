import Image from "next/image";

export default function AddOns() {
  return (
    <div className="flex flex-shrink-0 bg-primaryColor h-dvh flex-col p-4 pb-8 gap-4">
      <Image src="/linkedIn.png" alt="add on logo" className=" cursor-pointer" width={30} height={50} />
      <Image src="/figma.png" alt="add on logo" className=" cursor-pointer" width={30} height={50} />
      <Image src="/figma.png" alt="add on logo" className=" cursor-pointer" width={30} height={50} />
      <Image src="/addOnImg.png" alt="add on logo" className=" cursor-pointer" width={30} height={50} />
    </div>
  );
}
