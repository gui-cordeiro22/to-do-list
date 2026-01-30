// Dependencies
import { FunctionComponent } from "react";
import { cx } from "class-variance-authority";

// Styles
import { inputTextVariants } from "./input.styles";
import { textVariants } from "../text/text.styles";

// Types
import { InputTextProps } from "./input.types";

export const InputText: FunctionComponent<InputTextProps> = ({
  size,
  disabled,
  className,
  ...props
}) => {
  return (
    <input
      className={cx(
        inputTextVariants({ size, disabled }),
        textVariants(),
        className,
      )}
      type="text"
      {...props}
    />
  );
};
