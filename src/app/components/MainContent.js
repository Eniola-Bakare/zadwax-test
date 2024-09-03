import Image from "next/image";
import SearchBar from "./SearchBar";
import localFont from "next/font/local";
import "../../../public/vector.png";

const brFirmaFont = localFont({
  src: "../../../public/fonts/BR-Firma-Bold.otf",
});

export default function MainContent() {
  const steps = [
    {
      id: " Step 1",
      stepName: "Create your project",
      description:
        "Give your project a name, add a description and your goals.",
    },
    {
      id: "Step 2",
      stepName: "Invite your teammates",
      description: "Research is better together, Invite your colleagues.",
    },
    {
      id: "Step 3",
      stepName: "Setup your research process",
      description: "Add the processes that are specific to this project.    ",
    },
  ];
  const tips = [
    {
      heading: "Don't start from scratch, use a template",
      description:
        "Begin with field-tested frameworks adaptable to your research",
    },
    {
      heading: "Add steps and set milestones",
      description:
        "Define key stages and monitor progress from hypothesis to conclusion.",
    },
    {
      heading: "Track changes in your documents over time.",
      description:
        "Capture every revision to ensure data integrity and transpaency.",
    },
  ];
  const cards = [
    {
      imgURL: "/analysis.png",
      title: "Academic literature review",
      description:
        "Organize your sources and synthesize information effectively.",
    },
    {
      imgURL: "/analysis.png",
      title: "Data analysis templates",
      description:
        "Streamline patient data collection and analysis for medical research.",
    },
    {
      imgURL: "/analysis.png",
      title: "UX Heuristic template",
      description:
        "Assess your interface against established usability prinicples.",
    },
    {
      imgURL: "/analysis.png",
      title: "Affinity mapping template",
      description:
        "Assess your interface against established usability principles.",
    },
  ];
  return (
    <div className="bg-white w-full text-black">
      <SearchBar />

      <section className="w-full max-w-[1440px] pl-8 pt-6 pr-10 ">
        <div className="flex flex-col gap-2 pb-6">
          <p className={`text-textHeader ${brFirmaFont.className} text-3xl `}>
            Welcome Susan,
          </p>
          <p className="text- font-medium text-gray700">
            Get ready to complete your research processes on Zadwax
          </p>
        </div>

        <div className=" relative flex justify-between items-center bg-bgPrimary/60 rounded-2xl py-6">
          <div className="w-[90%] flex flex-col pl-6 gap-2">
            <p className="text-sm font-semibold text-gray900 ">
              Welcome to the cool kids club
            </p>
            <p className="text-primary700 text-2xl 2xl:text-3xl font-semibold">
              The new way designers revolutionize their work. See how others are
              using Zadwax to accelerate their design process.
            </p>
          </div>

          <div className="bg absolute right-0 bottom-0 w-40 ">
            <Image
              src="/vector.png"
              // src="../../../public/vector.png"
              width={1000}
              height={50}
              className="w-full "
              alt="vector image"
            />
          </div>
        </div>

        <div className="steps flex justify-between gap-8 pt-7 pb-3 ">
          <div className="__first flex flex-col items-start gap-3 flex-1 border p-4 rounded-lg">
            <div className="w-full flex justify-between items-center">
              <div className=" flex flex-col">
                <p className="text-2xl font-black text-textHeader">
                  Getting Started <br />
                </p>{" "}
                <p className="text-gray700">
                  Three simple steps to launch your first project
                </p>
              </div>
              <button className="px-3 py-2 rounded-lg bg-primaryColor text-white font-semibold">
                Create project
              </button>
            </div>

            <div className="flex flex-col items-start gap-2">
              {steps?.map((eachStep) => {
                return (
                  <div key={eachStep.id}>
                    <p className="text-gray700 font-bold">
                      {eachStep.id}: {eachStep.stepName}
                    </p>
                    <p className="text-sm text-gray500">{eachStep.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="__second flex flex-col items-start gap-3 flex-1 border p-4 rounded-lg">
            <div className="flex flex-col">
              <p className="text-2xl font-black text-textHeader">
                Research Tips and Tricks
              </p>
              <p className="text-gray700">
                Three simple steps to launch your first project
              </p>
            </div>

            <div className="flex flex-col items-start gap-2">
              {tips?.map((eachTip) => {
                return (
                  <div key={eachTip.heading}>
                    <p className=" text-gray700 font-bold">
                      {eachTip.heading}
                    </p>
                    <p className=" text-sm text-gray500">{eachTip.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <p className="font-bold text-xl ">Resources for you</p>

          <div className="flex gap-4  ">
            {cards.map((eachCard) => {
              return (
                <div key={eachCard.title} className="flex-1">
                  {
                    <div className="w-full rounded-t-lg">
                      <Image
                        src={eachCard.imgURL}
                        width={1000}
                        height={100}
                        className="w-full"
                        alt="resource image"
                      />

                      <div className="flex flex-col gap-1 border p-3 rounded-b-md ">
                        {
                          <>
                            <p className="text-lg font-semibold text-gray700">
                              {eachCard.title}
                            </p>
                            <p className="text-gray500 text-sm">
                              {eachCard.description}
                            </p>
                          </>
                        }
                      </div>
                    </div>
                  }
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
