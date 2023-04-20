import { FormEventHandler } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { usePython } from "react-py";
import { ArgumentInput } from "./ArgumentInput";
import { FunctionalComponent } from "./FunctionalComponent";
import { Run } from "./Run";
import { Script } from "./Script";
import { NEW_LINE } from "./newLine";

interface Props {
  script: Script;
}

export const Form: FunctionalComponent<Props> = ({
  script: { args, displayName, description, packageName, main },
  children,
  ...props
}) => {
  const form = useForm({ reValidateMode: "onChange", mode: "onChange" });
  const { runPython, stdout, stderr, isLoading, isRunning } = usePython();
  const onSubmit = form.handleSubmit((formValues) => {
    const values = `${args
      .map((arg) => formValues[arg.displayName])
      .join(",")}`;
    const pythonScript = `from ${packageName} import ${main}${NEW_LINE}${main}(${values})`;
    runPython(pythonScript);
  });

  return (
    <FormProvider {...form} {...props}>
      <FormContainer onSubmit={onSubmit}>
        {displayName}
        <p style={{ fontSize: "medium" }}>{description}</p>
        <ArgumentContainer>
          {args.map((argument, index) => (
            <ArgumentInput argument={argument} key={index}></ArgumentInput>
          ))}
          <Run isRunning={isRunning} isLoading={isLoading} />
        </ArgumentContainer>
        <div style={{ marginTop: 12 }}>
          <code>{stderr || stdout || "..."}</code>
        </div>
        {children}
      </FormContainer>
    </FormProvider>
  );
};

const ArgumentContainer: FunctionalComponent = ({ children, ...props }) => (
  <div
    {...props}
    style={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      marginTop: 10,
    }}
  >
    {children}
  </div>
);

const FormContainer: FunctionalComponent<{ onSubmit: FormEventHandler }> = ({
  children,
  onSubmit,
  ...props
}) => (
  <div {...props}>
    <form
      onSubmit={onSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {children}
    </form>
  </div>
);
