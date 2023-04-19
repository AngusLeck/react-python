export interface Script {
  displayName: string;
  packageName: string;
  description: string;
  main: string;
  args: Argument[];
}

export interface Argument<T extends ArgumentType = ArgumentType> {
  __type_name__: T;
  displayName: string;
  default: ValueType<T>;
}

export type ArgumentType = "integer";

export type ValueType<T extends ArgumentType> = { integer: number }[T];
