// Dependencies
import { FunctionComponent } from "react";

// Components
import { Icon } from "../icon";
import { Text } from "../text";

// Styles
import {
  buttonVariants,
  buttonIconVariants,
  buttonLabelVariants,
} from "./button.styles";

// Types
import { ButtonProps } from "./button.types";

export const Button: FunctionComponent<ButtonProps> = ({
  iconCompositions: IconElement,
  label,
  disabled,
  className,
  variant,
  size,
  ...props
}) => {
  return (
    <button
      className={buttonVariants({ variant, size, disabled, className })}
      {...props}
    >
      {!!IconElement && (
        <Icon
          SvgSource={IconElement}
          className={buttonIconVariants({ variant, size })}
        />
      )}

      <Text className={buttonLabelVariants({ variant })} content={label} />
    </button>
  );
};
