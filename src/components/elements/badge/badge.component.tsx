// Dependencies
import { FunctionComponent } from "react";

// Component
import { Text } from "../text";

// Types
import { BadgeProps, badgeTextVariants, badgeVariants } from "./badge.types";

export const Badge: FunctionComponent<BadgeProps> = ({
  variant,
  size,
  className,
  content,
  ...props
}) => {
  return (
    <div className={badgeVariants({ variant, size, className })} {...props}>
      <Text
        variant="body-sm-bold"
        className={badgeTextVariants({ variant })}
        content={content}
      />
    </div>
  );
};
