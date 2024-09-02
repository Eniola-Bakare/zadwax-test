import Image from "next/image";

export default function AddOns() {
  return (
    <div className=" bg-primaryColor h-full flex flex-col p-4 pb-8 gap-5">
      <Image src="/linkedIn.png" alt="add on logo" width={50} height={50} />
      <Image src="/figma.png" alt="add on logo" width={50} height={50} />
      <Image src="/figma.png" alt="add on logo" width={50} height={50} />
      <Image src="/addOnImg.png" alt="add on logo" width={50} height={50} />
    </div>
  );
}
