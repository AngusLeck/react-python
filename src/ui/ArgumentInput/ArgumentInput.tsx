import { Controller, useFormContext } from "react-hook-form";
import { FunctionalComponent } from "../FunctionalComponent";
import { Argument, ArgumentType, ValueType } from "../Script";
import { NumberInput } from "./NumberInput";

interface ArgumentInputProps {
  argument: Argument;
}

interface RenderProps<V> {
  value: number;
  onChange: (value: V | null) => void;
  label: string;
}

export const ArgumentInput: FunctionalComponent<ArgumentInputProps> = ({
  argument,
  ...props
}) => {
  const { control } = useFormContext();
  const Input = ArgumentInputComponent[argument.__type_name__];

  return (
    <view {...props}>
      <Controller
        control={control}
        name={argument.displayName}
        defaultValue={argument.default}
        render={({ field: { onChange, value } }) => {
          return (
            <Input
              onChange={onChange}
              value={value}
              label={argument.displayName}
            />
          );
        }}
      />
    </view>
  );
};

const ArgumentInputComponent: {
  [K in ArgumentType]: FunctionalComponent<RenderProps<ValueType<K>>>;
} = { integer: NumberInput };
