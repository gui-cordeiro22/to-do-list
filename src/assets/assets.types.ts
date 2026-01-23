export type ImageVariants = "logo";

export type Images = {
  [key in ImageVariants]: string;
};

export type IconVariants =
  | "checkCircle"
  | "checkRegular"
  | "checkSquareFill"
  | "circleDutone"
  | "clipboardText"
  | "pencilSimpleRegular"
  | "plusRegular"
  | "spinner"
  | "squareRegular"
  | "trashRegular"
  | "xRegular";

export type Icons = {
  [key in IconVariants]: string;
};
