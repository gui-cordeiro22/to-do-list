// Dependencies
import { cva, VariantProps } from "class-variance-authority";

// Types
import { JSX, ReactNode } from "react";

export const textVariants = cva("font-sans, text-gray-400", {
  variants: {
    variant: {
      "body-sm-bold": "text-sm leading-5 font-semibold",
      "body-md": "text-base leading-6 font-normal",
      "body-md-bold": "text-base leading-6 font-semibold",
    },
  },
  defaultVariants: {
    variant: "body-md",
  },
});

export type TextData = VariantProps<typeof textVariants> & {
  elementType?: keyof JSX.IntrinsicElements;
  className?: string;
  content: ReactNode;
};

export type TextProps = TextData;
