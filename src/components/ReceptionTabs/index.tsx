"use client";

import { Tab } from "@headlessui/react";
import Typography from "../Typography";
import { FaKey } from "react-icons/fa6";
import ReceptionTimetable from "./Timetable";
import ReceptionInformation from "./Information";

type ReceptionTabsProps = {
  className?: string;
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function ReceptionTabs(props: ReceptionTabsProps) {
  const contents = [
    {
      key: "timetable",
      label: "Plan Dnia",
      children: <ReceptionTimetable />,
    },
    {
      key: "information",
      label: "Informacje organizacyjne",
      children: <ReceptionInformation />,
    },
  ];
  return (
    <Tab.Group>
      <Tab.List className="grid grid-flow-col grid-cols-2 w-full">
        {contents.map(({ key, label }) => {
          return (
            <Tab
              key={key}
              className={({ selected }) => {
                return classNames(
                  "flex items-center justify-center py-3 px-5 focus:outline-none",
                  selected
                    ? "border-blue border-b-4"
                    : "border-neutral-400 border-b-2 hover:opacity-[75%]"
                );
              }}
            >
              {({ selected }) => (
                <Typography
                  variant="h6"
                  className={`${
                    selected ? "text-blue" : "text-neutral-400"
                  } text-center cursor-pointer`}
                >
                  {label}
                </Typography>
              )}
            </Tab>
          );
        })}
      </Tab.List>
      <Tab.Panels className="w-full md:w-[90%] md:max-h-[70dvh] px-5 pb-5">
        {contents.map(({ key, children }) => {
          return (
            <Tab.Panel key={key} className="py-5">
              {children}
            </Tab.Panel>
          );
        })}
      </Tab.Panels>
    </Tab.Group>
  );
}
