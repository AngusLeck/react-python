import React from "react";

export type FunctionalComponent<P = {}> = React.FunctionComponent<
  Omit<React.SVGProps<SVGViewElement>, keyof P> & P
>;
