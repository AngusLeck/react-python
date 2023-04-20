import { FunctionalComponent } from "../FunctionalComponent";

interface Props {
  value: number;
  onChange: (value: number | null) => void;
  label: string;
}

export const NumberInput: FunctionalComponent<Props> = ({
  value,
  onChange,
  label,
  ...props
}) => {
  return (
    <div
      {...props}
      style={{
        ...props.style,
        display: "flex",
        flexDirection: "column",
        marginLeft: 8,
        marginRight: 8,
      }}
    >
      <div
        style={{
          fontSize: "small",
          alignSelf: "baseline",
          marginBottom: 2,
        }}
      >
        {label}
      </div>
      <input
        type="number"
        value={value}
        onChange={({ target: { value } }) =>
          onChange(value ? Number(value) : null)
        }
      />
    </div>
  );
};
