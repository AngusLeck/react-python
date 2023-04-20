import { HTMLAttributes, DetailedHTMLProps, FunctionComponent } from "react";

export type FunctionalComponent<P = {}> = FunctionComponent<
  FunctionalComponentProps<P>
>;

export type FunctionalComponentProps<P = {}> = Omit<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  keyof P
> &
  P;
