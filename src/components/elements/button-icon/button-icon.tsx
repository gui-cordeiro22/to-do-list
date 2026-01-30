// Dependencies
import { FunctionComponent } from "react";

// Components
import { Icon } from "../icon";

// Types
import { ButtonIconProps } from "./button-icon.types";
import {
  buttonIconIconVariants,
  buttonIconVariants,
} from "./button-icon.styles";

export const ButtonIcon: FunctionComponent<ButtonIconProps> = ({
  variant,
  size,
  disabled,
  className,
  iconCompositions,
  ...props
}) => {
  return (
    <button
      className={buttonIconVariants({ variant, size, disabled, className })}
      {...props}
    >
      <Icon
        SvgSource={iconCompositions}
        className={buttonIconIconVariants({ variant, size })}
      />
    </button>
  );
};
