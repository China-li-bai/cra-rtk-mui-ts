import { MButton } from "componets";
import { FormWithHookForm } from "componets/from";
import { FormInputRadio } from "componets/from/radio";

function App() {
  return (
    <div className="App">
      <FormWithHookForm/>
      <FormInputRadio name="radio"/>
      <MButton/>
    </div>
  );
}

export default App;
