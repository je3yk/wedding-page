"use client";

import { Tab } from "@headlessui/react";
import Typography from "../Typography";
import { CategoryItem, ListItem } from "./ListItem";

type Category = {
  label: string;
  key: string;
  values: Array<CategoryItem>;
};

type VisitorsTabsProps = {
  categories: Array<Category>;
};

function classNames(...classes: Array<string>) {
  return classes.filter(Boolean).join(" ");
}

export function VisitorsTabs(props: VisitorsTabsProps) {
  return (
    <Tab.Group>
      <Tab.List className="grid grid-flow-col grid-cols-3 w-full md:w-[90%]">
        {props.categories.map(({ label }) => {
          return (
            <Tab
              key={label}
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
      <Tab.Panels className="w-full md:w-[90%] md:max-h-[70dvh] overflow-y-scroll px-5 pb-5">
        {props.categories.map(({ values, key }) => {
          return (
            <Tab.Panel key={key}>
              {values.map((value) => {
                return (
                  <ListItem
                    item={value}
                    key={`${key}-${value.title
                      .replaceAll(/ /g, "")
                      .toLowerCase()}`}
                  />
                );
              })}
            </Tab.Panel>
          );
        })}
      </Tab.Panels>
    </Tab.Group>
  );
}
