import Image from "next/image";

export default function Menu() {
  return (
    <section className="bg-white flex flex-col justify-between h-full pt-4 px-3 pb-[30px] border-r-2 border-r-gray-50  ">
      <div className="__menu-top">
        <div className="__logo flex items-center gap-5 ">
          <Image
            src="/logo.png"
            width={30}
            height={20}
            alt="logo text & image"
          />
          <p className="flex-shrink-0 text-textBlack text-[21px] font-bold">
            Zadwax
          </p>
        </div>

        <div className="__menu">
          <div className="__menu-first">
            <div className="flex items-center gap-5">
              <Image
                src="/homeIcon.png"
                width={30}
                height={30}
                alt="logo text & image"
              />
              <p className="flex-shrink-0 text-textBlack text-[21px] font-bold">
                Home
              </p>
            </div>
            <div className="flex items-center gap-5">
              <Image
                src="/recently.png"
                width={30}
                height={30}
                alt="logo text & image"
              />
              <p className="flex-shrink-0 text-textBlack text-[21px] font-bold">
                Recently
              </p>
            </div>
            <div className="flex items-center gap-5">
              <Image
                src="/starred.png"
                width={30}
                height={30}
                alt="logo text & image"
              />
              <p className="flex-shrink-0 text-textBlack text-[21px] font-bold">
                Starred
              </p>
            </div>
          </div>

          <hr />
          <div className="__menu-second border-t">
            <div className="flex items-center gap-5">
              <Image
                src="/project.png"
                width={30}
                height={30}
                alt="logo text & image"
              />
              <p className="flex-shrink-0 text-textBlack text-[21px] font-bold">
                Projects
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="__menu-btn">
        <div className="flex items-center gap-5">
          <Image
            src="/info.png"
            width={30}
            height={30}
            alt="logo text & image"
          />
          <p className="flex-shrink-0 text-textBlack text-[21px] font-bold">
            Support
          </p>
        </div>

        <div className="flex items-center gap-5">
          <Image
            src="/settings.png"
            width={30}
            height={30}
            alt="logo text & image"
          />
          <p className="flex-shrink-0 text-textBlack text-[21px] font-bold">
            Settings
          </p>
        </div>
      </div>
    </section>
  );
}
