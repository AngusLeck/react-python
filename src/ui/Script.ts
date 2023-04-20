export interface Script {
  displayName: string;
  packageName: string;
  description: string;
  main: string;
  args: Argument[];
}

export type Argument<T extends ArgumentType = ArgumentType> =
  T extends ArgumentType
    ? {
        __type_name__: T;
        displayName: string;
        default: ValueType<T>;
        validate?: (input: ValueType<T> | null) => string | boolean;
      }
    : never;

export type ArgumentType = "integer" | "string";

export type ValueType<T extends ArgumentType> = {
  integer: number;
  string: string;
}[T];
