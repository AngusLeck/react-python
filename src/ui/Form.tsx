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
  const form = useForm({ reValidateMode: "onChange", mode: "onChange" });
  const { runPython, stdout, stderr, isLoading, isRunning } = usePython();
  const { args, displayName, description } = script;
  const isError =
    Object.keys(form.formState.errors).filter(
      (key) => !!form.formState.errors[key]?.message
    ).length > 0;
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
          isError={isError}
          runPython={runPython}
          getValues={form.getValues}
        />
      </ArgumentContainer>
      <div style={{ marginTop: 12 }}>
        <code>{stderr || stdout || "..."}</code>
      </div>
      {children}
    </FormProvider>
  );
};

const ArgumentContainer: FunctionalComponent = ({ children }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "row",
      marginTop: 10,
    }}
  >
    {children}
  </div>
);
