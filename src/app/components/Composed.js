import Image from "next/image";
import AddOns from "./AddOns";
import Menu from "./Menu";
import MainContent from "./MainContent";

export default function Dashboard() {
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
      imgURL: "/",
      title: "Academic literature review",
      description:
        "Organize your sources and synthesize information effectively.",
    },
    {
      imgURL: "/",
      title: "Data analysis templates",
      description:
        "Streamline patient data collection and analysis for medical research.",
    },
    {
      imgURL: "/",
      title: "Data analysis templatesUX Heuristic template",
      description:
        "Assess your interface against established usability prinicples.",
    },
    {
      imgURL: "/",
      title: "Affinity mapping template",
      description:
        "Assess your interface against established usability principles.",
    },
  ];

  return (
    <div className="flex w-full h-dvh">
      <AddOns />
      <Menu />
      <MainContent />
    </div>
  );
}
