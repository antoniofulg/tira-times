import { GenerateListFormProvider } from "./components/GenerateListForm/context/GenerateListFormContext";
import GenerateListForm from "./components/GenerateListForm/GenerateListForm";

const GenerateList = () => {
  return (
    <GenerateListFormProvider>
      <div className="container px-4 pt-8 mx-auto">
        <GenerateListForm formSubmit={() => null} />
      </div>
    </GenerateListFormProvider>
  );
};

export default GenerateList;
