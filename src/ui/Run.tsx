import { FunctionalComponent } from "./FunctionalComponent";
import { Script } from "./Script";
import { NEW_LINE } from "./newLine";

interface Props {
  isRunning: boolean;
  isLoading: boolean;
  script: Script;

  runPython: (script: string) => void;
  getValues: (value: string) => string;
}

export const Run: FunctionalComponent<Props> = ({
  isRunning,
  isLoading,
  script: { args, packageName, main },
  runPython,
  getValues,
}) => {
  return (
    <view
      style={{
        display: "flex",
        flexDirection: "column-reverse",
      }}
    >
      <input
        type="submit"
        value={!isRunning ? "Run" : "Running..."}
        disabled={isLoading || isRunning}
        style={{ width: 100, marginLeft: 8, height: 22 }}
        onClick={(e) => {
          e.preventDefault();
          const values = `${args
            .map((arg) => getValues(arg.displayName))
            .join(",")}`;
          const pythonScript = `from ${packageName} import ${main}${NEW_LINE}${main}(${values})`;
          runPython(pythonScript);
        }}
      />
    </view>
  );
};
