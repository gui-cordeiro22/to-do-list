// Dependencies
import { ComponentProps, JSX, ReactNode } from "react";
import { VariantProps } from "class-variance-authority";

// Types
import { cardVariants } from "./card.styles";

export type CardData = {
  elementType?: keyof JSX.IntrinsicElements;
};

export type CardElement = {
  content: ReactNode;
};

export type CardProps = VariantProps<typeof cardVariants> &
  ComponentProps<"div"> &
  CardData &
  CardElement;
