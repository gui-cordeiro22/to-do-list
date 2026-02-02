// Dependencies
import { VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";

// Types
import { inputCheckboxVariants } from "./input-checkbox.styles";

export type InputCheckboxProps = VariantProps<typeof inputCheckboxVariants> &
  Omit<ComponentProps<"input">, "size" | "disabled">;
