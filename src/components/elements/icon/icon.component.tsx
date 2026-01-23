// Dependencies
import { FunctionComponent } from "react";

// Types
import { IconProps } from "./icon.types";

export const Icon: FunctionComponent<IconProps> = ({ SvgSource, ...props }) => {
  return <SvgSource {...props} />;
};
