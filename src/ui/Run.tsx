import { useFormContext } from "react-hook-form";
import { FunctionalComponent } from "./FunctionalComponent";

interface Props {
  isRunning: boolean;
  isLoading: boolean;
}

export const Run: FunctionalComponent<Props> = ({ isRunning, isLoading }) => {
  const { formState } = useFormContext();
  const isError =
    Object.keys(formState.errors).filter(
      (key) => !!formState.errors[key]?.message
    ).length > 0;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column-reverse",
      }}
    >
      <input
        type="submit"
        value={!isRunning ? "Run" : "Running..."}
        disabled={isLoading || isRunning || isError}
        style={{
          width: 100,
          marginLeft: 24,
          marginBottom: 20,
          padding: 4,
        }}
      />
    </div>
  );
};
