import { FunctionalComponent } from "../FunctionalComponent";

interface Props {
  value: number;
  onChange: (value: number | null) => void;
  label: string;
  error?: string;
}

export const NumberInput: FunctionalComponent<Props> = ({
  value,
  onChange,
  label,
  error,
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
        onChange={({ target: { value } }) =>
          onChange(value ? Number(value) : null)
        }
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
