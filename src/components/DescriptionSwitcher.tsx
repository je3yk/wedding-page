"use client";

import { useMemo, useState } from "react";
import Typography from "./Typography";

type DescriptionOption = {
  key: string;
  label: string;
  children: Array<React.ReactNode> | null;
};

type DescriptionSwitcherProps = {
  contents: Array<DescriptionOption>;
  defaultLabel: string;
  className?: string;
  emptyMessage?: string;
};

const currentLabelClass = "text-blue border-blue border-b-4";
const defaultLabelClass =
  "text-neutral-400 border-neutral-400 border-b-2 hover:opacity-[75%]";

export default function DescriptionSwitcher(props: DescriptionSwitcherProps) {
  const [currentLabel, setCurrentLabel] = useState(props.defaultLabel);

  const currentContent = useMemo(() => {
    return props.contents.find((content) => content.key === currentLabel);
  }, [currentLabel, props.contents]);

  return (
    <div className={props.className}>
      <div className="flex justify-center items-center md:gap-10">
        {props.contents.map((content, id) => {
          return (
            <div
              key={`${content.key}-${id}`}
              onClick={() => setCurrentLabel(content.key)}
            >
              <Typography
                variant="h6"
                className={`${
                  currentLabel === content.key
                    ? currentLabelClass
                    : defaultLabelClass
                } py-2 px-4 cursor-pointer`}
              >
                {content.label}
              </Typography>
            </div>
          );
        })}
      </div>
      <div className="px-5 my-10 h-full flex flex-col md:justify-start max-h-[80%] overflow-y-scroll">
        {currentContent?.children && currentContent.children.length > 0 ? (
          currentContent.children
        ) : (
          <Typography
            variant="h6"
            className="text-neutral-700 text-center py-2 2xl:py-4"
          >
            {props.emptyMessage}
          </Typography>
        )}
      </div>
    </div>
  );
}
