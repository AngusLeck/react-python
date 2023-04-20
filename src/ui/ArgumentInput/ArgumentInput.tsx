import { Controller, useFormContext } from "react-hook-form";
import {
  FunctionalComponent,
  FunctionalComponentProps,
} from "../FunctionalComponent";
import { Argument, ArgumentType, ValueType } from "../Script";
import { IntegerInput } from "./NumberInput";

interface ArgumentInputProps<T extends ArgumentType> {
  argument: Argument<T>;
}

export function ArgumentInput<T extends ArgumentType>({
  argument,
  ...props
}: FunctionalComponentProps<ArgumentInputProps<T>>) {
  const { control } = useFormContext();
  const Input = ArgumentInputComponent(argument.__type_name__);

  return (
    <div {...props}>
      <Controller
        control={control}
        name={argument.displayName}
        defaultValue={argument.default}
        rules={{ required: "Required", validate: argument.validate }}
        render={({ field: { onChange, value }, fieldState: { error } }) => {
          return (
            <Input
              onChange={onChange}
              value={value}
              label={argument.displayName}
              error={error?.message}
            />
          );
        }}
      />
    </div>
  );
}

interface RenderProps<V> {
  value: V;
  onChange: (value: V | null) => void;
  label: string;
  error?: string;
}

type ArgumentInputComponentType<T extends ArgumentType> = FunctionalComponent<
  RenderProps<ValueType<T>>
>;

// TODO: implement StringInput
const ArgumentInputComponentMap: {
  [T in ArgumentType]: ArgumentInputComponentType<T>;
} = { integer: IntegerInput, string: () => null };

function ArgumentInputComponent<T extends ArgumentType>(
  type: T
): ArgumentInputComponentType<T> {
  return ArgumentInputComponentMap[type];
}
