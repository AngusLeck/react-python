import { FunctionalComponent } from "../FunctionalComponent";

interface IntegerInputProps {
  value: number;
  onChange: (value: number | null) => void;
  label: string;
  error?: string;
}

interface NumberInputProps extends IntegerInputProps {
  integerOnly?: boolean;
}

export const IntegerInput: FunctionalComponent<IntegerInputProps> = (props) => (
  <NumberInput {...props} integerOnly></NumberInput>
);

export const NumberInput: FunctionalComponent<NumberInputProps> = ({
  value,
  onChange,
  label,
  error,
  integerOnly = false,
  ...props
}) => {
  return (
    <div
      {...props}
      style={{
        ...props.style,
        display: "flex",
        flexDirection: "column",
        marginLeft: 24,
        marginRight: 24,
      }}
    >
      <div
        style={{
          fontSize: "small",
          alignSelf: "baseline",
          paddingBottom: 4,
        }}
      >
        {label}
      </div>
      <input
        type="number"
        value={value ?? ""}
        style={{ padding: 4, borderColor: error ? "red" : undefined }}
        onKeyDown={(e) => {
          if (integerOnly && e.key.length === 1 && e.key.match(/\D/g)?.length) {
            e.preventDefault();
          }
        }}
        onChange={({ target: { value } }) => onChange(numberFromString(value))}
      />
      <div
        style={{
          fontSize: 12,
          color: "gray",
          padding: 4,
          alignSelf: "baseline",
          height: 12,
        }}
      >
        {error}
      </div>
    </div>
  );
};

function numberFromString(input: string | null): number | null {
  if (!input) return null;

  return Number(input);
}
