import "./App.css";
import { PythonProvider } from "react-py";
import { Form } from "./ui";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PythonProvider
          packages={{ official: ["micropip"], micropip: ["riskCalculator"] }}
        >
          <Form
            script={{
              packageName: "riskCalculator",
              displayName: "Risk Battle Calculator",
              description:
                "Enter the number of attackers and number of defenders to find out the likely outcome of the battle.",
              main: "risk",
              args: [
                {
                  __type_name__: "integer",
                  displayName: "Attackers",
                  default: 10,
                  validate: (input) =>
                    input === null || input < 0
                      ? "number must be >= 0"
                      : input > 100
                      ? "number must be <= 100"
                      : false,
                },
                {
                  __type_name__: "integer",
                  displayName: "Defenders",
                  default: 10,
                  validate: (input) =>
                    input === null || input < 0
                      ? "number must be >= 0"
                      : input > 100
                      ? "number must be <= 100"
                      : false,
                },
              ],
            }}
          />
        </PythonProvider>
      </header>
    </div>
  );
}

export default App;
