"use client";

import AddOns from "./AddOns";
import Menu from "./Menu";
import MainContent from "./MainContent";
import { useState } from "react";

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

  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="flex justify-center 2xl:justify-start w-full h-dvh overflow-hidden">
      <div className="hidden lg:flex h-full">
        <AddOns />
        <Menu />
        <MainContent />
      </div>

      <div className="flex lg:hidden">
        {showMenu && (
          <div className="flex ">
            <AddOns />
            <Menu setShowMenu={setShowMenu} />
          </div>
        )}
        {!showMenu && <MainContent setShowMenu={setShowMenu} />}
      </div>
    </div>
  );
}
