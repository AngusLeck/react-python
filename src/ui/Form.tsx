import { FormProvider, useForm } from "react-hook-form";
import { usePython } from "react-py";
import { ArgumentInput } from "./ArgumentInput";
import { FunctionalComponent } from "./FunctionalComponent";
import { Run } from "./Run";
import { Script } from "./Script";

interface Props {
  script: Script;
}

export const Form: FunctionalComponent<Props> = ({
  script,
  children,
  ...props
}) => {
  const form = useForm();
  const { runPython, stdout, stderr, isLoading, isRunning } = usePython();
  const { args, displayName, description } = script;
  return (
    <FormProvider {...{ ...form, ...props }}>
      {displayName}
      <p style={{ fontSize: "medium" }}>{description}</p>
      <ArgumentContainer>
        {args.map((argument, index) => (
          <ArgumentInput argument={argument} key={index}></ArgumentInput>
        ))}
        <Run
          script={script}
          isRunning={isRunning}
          isLoading={isLoading}
          runPython={runPython}
          getValues={form.getValues}
        />
      </ArgumentContainer>
      <pre>
        <code>{stderr || stdout || " "}</code>
      </pre>
      {children}
    </FormProvider>
  );
};

const ArgumentContainer: FunctionalComponent = ({ children }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "row",
    }}
  >
    {children}
  </div>
);
