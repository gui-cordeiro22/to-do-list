// Dependencies
import { ComponentProps } from "react";
import { VariantProps } from "class-variance-authority";

// Types
import { inputTextVariants } from "./input.styles";

export type InputTextProps = Omit<
  ComponentProps<"input">,
  "size" | "disabled"
> &
  VariantProps<typeof inputTextVariants>;
