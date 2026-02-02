// Dependencies
import { createElement, FunctionComponent } from "react";

// Styles
import { containerVariants } from "./container.styles";

// Types
import { ContainerProps } from "./container.types";

export const Container: FunctionComponent<ContainerProps> = ({
  containerType = "div",
  children,
  size,
  className,
  ...props
}) => {
  return createElement(
    containerType,
    {
      className: containerVariants({ size: "md", className }),
      ...props,
    },
    children,
  );
};
