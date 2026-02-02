// Dependencies
import React, { FunctionComponent } from "react";

// Styles
import { cardVariants } from "./card.styles";

// Types
import { CardProps } from "./card.types";

export const Card: FunctionComponent<CardProps> = ({
  elementType = "div",
  className,
  content,
  size,
  ...props
}) => {
  return React.createElement(
    elementType,
    {
      className: cardVariants({ size, className }),
      ...props,
    },

    content,
  );
};
