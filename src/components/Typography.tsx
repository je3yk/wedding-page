import { VariantProps, cva } from "class-variance-authority";

const styleClasses = cva("", {
  variants: {
    variant: {
      h1: [
        "text-6xl",
        "sm:text-8xl",
        "md:text-10xl",
        "2xl:text-12xl",
        "font-vibes",
      ],
      h2: ["text-5xl", "md:text-6xl", "2xl:text-8xl", "font-vibes"],
      h2Mobile: ["text-8xl", "md:text-10xl", "2xl:text-12xl", "font-vibes"],
      h2Normal: ["text-5xl", "md:text-6xl", "2xl:text-8xl", "font-primary"],
      h3: ["text-4xl", "md:text-6xl", "2xl:text-8xl", "font-vibes"],
      h3Label: ["text-4xl", "md:text-6xl", "2xl:text-8xl", "font-dancing"],
      h4: ["text-3xl", "md:text-4xl", "2xl:text-10xl", "font-dancing"],
      h5: [
        "text-2xl",
        "md:text-3xl",
        "2xl:text-4xl",
        "font-vibes",
        "leading-normal",
      ],
      h6: ["text-2xl", "md:text-3xl", "2xl:text-4xl", "font-primary"],
      bodyLarge: ["text-xl", "md:text-2xl", "2xl:text-4xl", "font-primary"],
      bodyLargeStrong: [
        "text-xl",
        "md:text-2xl",
        "2xl:text-4xl",
        "font-primary",
        "font-bold",
      ],
      bodySmall: ["text-lg", "2xl:text-lg", "font-primary"],
      bodySmallStrong: ["text-lg", "2xl:text-2xl", "font-bold", "font-primary"],
      labelLarge: ["text-base", "block", "font-primary"],
      labelSmall: ["text-sm", "block", "font-primary"],
    },
  },
});

export type TypographyVariant = VariantProps<typeof styleClasses>["variant"];

type TypographyProps = {
  children?: React.ReactNode;
  className?: string;
  variant: TypographyVariant;
};

export default function Typography({
  variant,
  children,
  className,
}: TypographyProps) {
  const typographyClass = `${styleClasses({ variant: variant })} ${className}`;
  switch (variant) {
    case "h1":
    case "h2":
    case "h2Normal":
    case "h2Mobile":
      return <h1 className={typographyClass}>{children}</h1>;
    case "h3":
    case "h3Label":
      return <h3 className={typographyClass}>{children}</h3>;
    case "h4":
      return <h4 className={typographyClass}>{children}</h4>;
    case "h5":
      return <h5 className={typographyClass}>{children}</h5>;
    case "h6":
      return <h6 className={typographyClass}>{children}</h6>;

    case "bodyLarge":
    case "bodyLargeStrong":
    case "bodySmall":
    case "bodySmallStrong":
      return <p className={typographyClass}>{children}</p>;

    case "labelLarge":
    case "labelSmall":
      return <span className={typographyClass}>{children}</span>;

    default:
      return null;
  }
}
