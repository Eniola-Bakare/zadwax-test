import Image from "next/image";
import SearchBar from "./SearchBar";

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
      title: "Data analysis templatesUX Heuristic template",
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
    <div className="bg-white h-full w-full text-black">
      <SearchBar />

      <section>
        <div>
          <p>Welcome Susan,</p>
          <p>Get ready to complete your research processes on Zawax</p>
        </div>

        <div>
          <p>Welcome to the cool ids club</p>
          <p>
            The new way designers revolutionize their work. See how others are
            using Zadwax to accelerate their design process.
          </p>
        </div>

        <div className="steps">
          <div className="__first">
            <div>
              <p>
                Getting Started{" "}
                <span>Three simple steps to launch your first project</span>
              </p>
              <button>Create project</button>
            </div>

            <div>
              {steps?.map((eachStep) => {
                return (
                  <div key={eachStep.id}>
                    <p>
                      {eachStep.id}:{eachStep.stepName}
                    </p>
                    <p>{eachStep.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="__second">
            <div>
              <p>
                Research Tips and Tricks
                <span>Three simple steps to launch your first project</span>
              </p>
            </div>

            <div>
              {tips?.map((eachTip) => {
                return (
                  <div key={eachTip.heading}>
                    <p>{eachTip.heading}</p>
                    <p>{eachTip.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div>
          <p>Resources for you</p>

          <div>
            {cards.map((eachCard) => {
              return (
                <div key={eachCard.title}>
                  {
                    <>
                      <Image
                        src={eachCard.imgURL}
                        width={100}
                        height={100}
                        alt="resource image"
                      />

                      <div>
                        {
                          <>
                            <p>{eachCard.title}</p>
                            <p>{eachCard.description}</p>
                          </>
                        }
                      </div>
                    </>
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
