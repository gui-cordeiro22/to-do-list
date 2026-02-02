// Dependencies
import { FunctionComponent } from "react";

// Components
import { Icon } from "../icon";

// Styles
import {
  inputCheckboxIconVariants,
  inputCheckboxVariants,
  inputCheckboxWrapperVariants,
} from "./input-checkbox.styles";

// Assets
import CheckIcon from "../../../assets/icons/check-regular.svg?react";

// Types
import { InputCheckboxProps } from "./input-checkbox.types";

export const InputCheckbox: FunctionComponent<InputCheckboxProps> = ({
  size,
  disabled,
  className,
  ...props
}) => {
  return (
    <label className={inputCheckboxWrapperVariants({ className })}>
      <input
        type="checkbox"
        className={inputCheckboxVariants({ size, disabled })}
        {...props}
      />

      <Icon
        SvgSource={CheckIcon}
        className={inputCheckboxIconVariants({ size })}
      />
    </label>
  );
};
