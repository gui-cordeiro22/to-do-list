// Dependencies
import { VariantProps } from "class-variance-authority";

// Types
import { JSX, ReactNode } from "react";
import { textVariants } from "./text.styles";

export type TextData = VariantProps<typeof textVariants> & {
  elementType?: keyof JSX.IntrinsicElements;
  className?: string;
  content: ReactNode;
};

export type TextProps = TextData;
