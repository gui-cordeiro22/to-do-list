// Dependencies
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";

export const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full",
  {
    variants: {
      variant: {
        primary: "bg-green-light",
        secondary: "bg-pink-light",
      },
      size: {
        sm: "py-0.5 px-2",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "sm",
    },
  },
);

export const badgeTextVariants = cva("", {
  variants: {
    variant: {
      primary: "text-green-dark",
      secondary: "text-pink-dark",
    },

    defaultVariants: {
      variant: "primary",
    },
  },
});

export type BadgeData = ComponentProps<"div"> &
  VariantProps<typeof badgeVariants> & {
    size?: string;
    className?: string;
    content: string;
  };

export type BadgeProps = BadgeData;
