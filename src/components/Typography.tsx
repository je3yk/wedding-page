import { VariantProps, cva } from "class-variance-authority";

const styleClasses = cva("", {
  variants: {
    variant: {
      h1: ["text-10xl font-vibes"],
      h2: ["text-8xl font-vibes"],
      h3: ["text-4xl font-primary"],
      body: ["text-2xl font-primary"],
      bodyRegular: ["text-xl font-primary"],
      bodySmall: ["text-lg font-primary"],
    },
  },
});

export type TypographyVariant = VariantProps<typeof styleClasses>["variant"];

type TypographyProps = {
  children?: React.ReactNode;
  className?: string;
  variant: TypographyVariant;
};

export default function Typography(props: TypographyProps) {
  const typographyClass = `${styleClasses({ variant: props.variant })} ${
    props.className
  }`;
  switch (props.variant) {
    case "h1":
    case "h2":
    case "h3":
      return <h1 className={typographyClass}>{props.children}</h1>;
    case "body":
    case "bodySmall":
    case "bodyRegular":
      return <p className={typographyClass}>{props.children}</p>;
  }
}
