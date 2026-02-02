// Dependencies
import { ComponentProps, JSX, ReactNode } from "react";
import { VariantProps } from "class-variance-authority";

// Types
import { containerVariants } from "./container.styles";

export type ContainerData = {
  containerType?: keyof JSX.IntrinsicElements;
};

export type ContainerElement = {
  content?: ReactNode;
};

export type ContainerProps = ContainerData &
  ContainerElement &
  VariantProps<typeof containerVariants> &
  Omit<ComponentProps<"div">, "size">;
