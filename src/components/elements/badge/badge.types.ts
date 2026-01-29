// Dependencies
import { VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";

// Types
import { badgeVariants } from "./badge.styles";

export type BadgeData = ComponentProps<"div"> &
  VariantProps<typeof badgeVariants> & {
    size?: string;
    className?: string;
    content: string;
  };

export type BadgeProps = BadgeData;
