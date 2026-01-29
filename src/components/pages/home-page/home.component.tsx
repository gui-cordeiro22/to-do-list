// Dependencies
import { Fragment, FunctionComponent } from "react";

// Types
import { HomeProps } from "./home.types";

export const Home: FunctionComponent<HomeProps> = ({ pageContent }) => {
  return <Fragment>{pageContent};</Fragment>;
};
