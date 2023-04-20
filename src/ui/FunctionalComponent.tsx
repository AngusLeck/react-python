import { HTMLAttributes, DetailedHTMLProps, FunctionComponent } from "react";

export type FunctionalComponent<P = {}> = FunctionComponent<
  Omit<
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    keyof P
  > &
    P
>;
