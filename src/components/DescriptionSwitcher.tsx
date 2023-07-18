"use client";

import { useMemo, useState } from "react";
import Typography from "./Typography";

type DescriptionOption = {
  key: string;
  label: string;
  children: Array<React.ReactNode>;
};

type DescriptionSwitcherProps = {
  contents: Array<DescriptionOption>;
  defaultLabel: string;
  className?: string;
};

export default function DescriptionSwitcher(props: DescriptionSwitcherProps) {
  const [currentLabel, setCurrentLabel] = useState(props.defaultLabel);

  const currentContent = useMemo(() => {
    return props.contents.find((content) => content.key === currentLabel);
  }, [currentLabel, props.contents]);

  return (
    <div className={props.className}>
      <div className="flex justify-start gap-4 md:justify-center md:gap-10">
        {props.contents.map((content, id) => {
          return (
            <div
              key={`${content.key}-${id}`}
              onClick={() => setCurrentLabel(content.key)}
            >
              <Typography
                variant="h4"
                className={`${
                  currentLabel === content.key
                    ? "text-blue"
                    : "text-neutral-400"
                } hover:opacity-[75%]`}
              >
                {content.label}
              </Typography>
            </div>
          );
        })}
      </div>
      <div className="px-5 my-10 h-full flex flex-col md:justify-start">
        {currentContent?.children && currentContent.children.length > 0
          ? currentContent.children
          : null}
      </div>
    </div>
  );
}
