import { Stepper } from "@/presentation/components";
import { updateFields } from "@/utils";
import { useContext } from "react";
import { BasicInfoForm, PlayersForm, RulesForm } from "./components";
import {
  BasicInfoFormType,
  GenerateListFormType,
  GenerateListFormContext,
  PlayersFormType,
  RulesFormType,
  basicInfoFormInitialValues,
  playersFormInitialValues,
  rulesFormInitialValues,
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

  const basicInfoFormData = updateFields<BasicInfoFormType>(
    basicInfoFormInitialValues,
    form
  );
  const playersFormData = updateFields<PlayersFormType>(
    playersFormInitialValues,
    form
  );
  const rulesFormData = updateFields<RulesFormType>(
    rulesFormInitialValues,
    form
  );

  return (
    <>
      <Stepper steps={steps} current={currentStep} />

      {currentStep === 0 && (
        <BasicInfoForm defaultValues={basicInfoFormData} onSubmit={nextStep} />
      )}
      {currentStep === 1 && (
        <PlayersForm
          defaultValues={playersFormData}
          prevStep={prevStep}
          onSubmit={nextStep}
        />
      )}
      {currentStep === 2 && (
        <RulesForm
          defaultValues={rulesFormData}
          prevStep={prevStep}
          onSubmit={submitHandler}
        />
      )}
    </>
  );
};

export default GenerateListForm;
