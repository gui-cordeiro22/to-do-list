// Dependencies
import { ComponentProps } from "react";
import { VariantProps } from "class-variance-authority";

// Types
import { Icon } from "../icon";
import { buttonIconVariants } from "./button-icon.styles";

export type ButtonIconElement = Omit<
  ComponentProps<"button">,
  "size" | "disabled"
> &
  VariantProps<typeof buttonIconVariants> & {
    iconCompositions: ComponentProps<typeof Icon>["SvgSource"];
  };

export type ButtonIconProps = ButtonIconElement;
