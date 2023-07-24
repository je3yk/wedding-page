"use client";

import { Tab } from "@headlessui/react";
import Typography from "../Typography";

type CategoryItem = {};

type Category = {
  label: string;
  values: Array<CategoryItem>;
};

type VisitorsTabsProps = {
  labels: Array<string>;
};

function classNames(...classes: Array<string>) {
  return classes.filter(Boolean).join(" ");
}

export function VisitorsTabs(props: VisitorsTabsProps) {
  return (
    <Tab.Group>
      <Tab.List className="grid grid-flow-col grid-cols-3 w-full md:w-[90%]">
        {props.labels.map((label, id) => {
          return (
            <Tab
              key={`${label}-${id}`}
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
                  className={`${selected ? "text-blue" : "text-neutral-400"}`}
                >
                  {label}
                </Typography>
              )}
            </Tab>
          );
        })}
      </Tab.List>
    </Tab.Group>
  );
}
