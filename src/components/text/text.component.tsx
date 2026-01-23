// Dependencies
import { createElement, FunctionComponent } from "react";

// Types
import { TextProps, textVariants } from "./text.types";

export const Text: FunctionComponent<TextProps> = ({
  elementType = "span",
  className,
  variant,
  content,
  ...props
}) => {
  return createElement(
    elementType,
    {
      className: textVariants({ variant, className }),
      ...props,
    },
    content,
  );
};
