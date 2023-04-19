import "./App.css";
import { PythonProvider } from "react-py";
import { Form } from "./ui/Form";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PythonProvider packages={{ micropip: ["riskCalculator"] }}>
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
                  displayName: "attackers",
                  default: 10,
                },
                {
                  __type_name__: "integer",
                  displayName: "defenders",
                  default: 10,
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
