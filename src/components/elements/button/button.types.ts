// Dependencies
import { ComponentProps } from "react";
import { VariantProps } from "class-variance-authority";

// Types
import { Icon } from "../icon";
import { buttonVariants } from "./button.styles";

export type ButtonData = Omit<ComponentProps<"button">, "size" | "disabled"> &
  VariantProps<typeof buttonVariants> & {
    label: string;
  };

export type ButtonElement = {
  iconCompositions?: ComponentProps<typeof Icon>["SvgSource"];
};

export type ButtonProps = ButtonData & ButtonElement;
