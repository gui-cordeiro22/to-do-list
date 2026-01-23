// Dependencies
import { ComponentProps, FunctionComponent } from "react";

export type IconElement = ComponentProps<"svg"> & {
  SvgSource: FunctionComponent<ComponentProps<"svg">>;
};

export type IconProps = IconElement;
