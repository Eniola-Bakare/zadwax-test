import Image from "next/image";
import { IoIosCloseCircle } from "react-icons/io";

export default function Menu({ setShowMenu }) {
  return (
    <section className="flex flex-shrink-0 w-[300px] lg:w-[237px] bg-white flex-col justify-between h-full pt-4 px-3 pb-[30px] lg:border-r-2  ">
      <div className="__menu-top ">
        <div className="__logo relative flex items-center gap-2 p-2 pt-10 lg:pt-0 pb-3">
          <IoIosCloseCircle
            className="text-primary700 hover:text-primary700/30 text-4xl absolute top-0 right-0"
            onClick={() => setShowMenu(false)}
          />

          <Image
            src="/logo.png"
            width={18}
            height={20}
            alt="logo text & image"
          />
          <p className="flex-shrink-0 text-textBlack text-[24px] font-black">
            Zadwax
          </p>
        </div>

        <div className="__menu ">
          <div className="__menu-first">
            <div className="flex items-center gap-5 rounded-lg p-2 bg-primary50">
              <Image
                src="/homeIcon.png"
                width={25}
                height={30}
                alt="logo text & image"
              />
              <p className="flex-shrink-0 text-primary700 text-[21px] font-bold">
                Home
              </p>
            </div>
            <div className="flex items-center p-2 gap-5">
              <Image
                src="/recently.png"
                width={25}
                height={30}
                alt="logo text & image"
              />
              <p className="flex-shrink-0 text-gray700 text-[21px] font-medium">
                Recents
              </p>
            </div>
            <div className="flex items-center gap-5 p-2">
              <Image
                src="/starred.png"
                width={25}
                height={30}
                alt="logo text & image"
              />
              <p className="flex-shrink-0 text-gray700  text-[21px] font-medium">
                Starred
              </p>
            </div>
          </div>

          <div className="__menu-second relative border-t-2 ">
            <div className="flex items-center gap-5 p-2">
              <Image
                src="/project.png"
                width={25}
                height={30}
                alt="logo text & image"
              />
              <p className="flex-shrink-0 text-gray700 text-[21px] font-medium">
                Projects
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="__menu-btn p-2">
        <div className="flex items-center gap-5">
          <Image
            src="/info.png"
            width={25}
            height={30}
            alt="logo text & image"
          />
          <p className="flex-shrink-0 text-gray700 text-[21px] font-medium">
            Support
          </p>
        </div>

        <div className="flex items-center gap-5">
          <Image
            src="/settings.png"
            width={25}
            height={30}
            alt="logo text & image"
          />
          <p className="flex-shrink-0 text-gray700 text-[21px] font-medium">
            Settings
          </p>
        </div>
      </div>
    </section>
  );
}
