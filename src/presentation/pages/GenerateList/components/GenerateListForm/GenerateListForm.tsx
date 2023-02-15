import { Stepper } from "@/presentation/components";
import { useContext } from "react";
import { BasicInfoForm, PlayersForm, RulesForm } from "./components";
import {
  BasicInfoFormType,
  GenerateListFormType,
  GenerateListFormContext,
  PlayersFormType,
  RulesFormType,
} from "./context/GenerateListFormContext";

type GenerateListFormProps = {
  formSubmit: (form: GenerateListFormType) => void;
};

const GenerateListForm = ({ formSubmit }: GenerateListFormProps) => {
  const {
    state: { form, currentStep, steps },
    dispatch,
  } = useContext(GenerateListFormContext);

  const submitHandler = () => {
    formSubmit(form);
  };

  const nextStep = (
    payload: BasicInfoFormType | PlayersFormType | RulesFormType
  ) => {
    dispatch({
      type: "UPDATE_FORM",
      payload,
    });
    dispatch({ type: "NEXT_STEP" });
  };

  const prevStep = () => {
    dispatch({
      type: "PREV_STEP",
    });
  };

  return (
    <>
      <Stepper steps={steps} current={currentStep} />

      {currentStep === 0 && <BasicInfoForm onSubmit={nextStep} />}
      {currentStep === 1 && (
        <PlayersForm prevStep={prevStep} onSubmit={nextStep} />
      )}
      {currentStep === 2 && (
        <RulesForm prevStep={prevStep} onSubmit={submitHandler} />
      )}
    </>
  );
};

export default GenerateListForm;
