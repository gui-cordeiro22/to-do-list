// Dependencies
import { createElement, FunctionComponent } from "react";

// Styles
import { textVariants } from "./text.styles";

// Types
import { TextProps } from "./text.types";

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
