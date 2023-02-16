import {
  basicInfoFormInitialValues,
  BasicInfoFormInput,
  playersFormInitialValues,
  PlayersFormInput,
  rulesFormInitialValues,
  RulesFormInput,
} from "@/domain/schemas";
import { Stepper } from "@/presentation/components";
import { updateFields } from "@/utils";
import { useContext } from "react";
import { BasicInfoForm, PlayersForm, RulesForm } from "./components";
import {
  GenerateListFormType,
  GenerateListFormContext,
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
    payload: BasicInfoFormInput | PlayersFormInput | RulesFormInput
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

  const goToStep = (index: number) => {
    dispatch({
      type: "GO_TO_STEP",
      payload: index,
    });
  };

  const basicInfoFormData = updateFields<BasicInfoFormInput>(
    basicInfoFormInitialValues,
    form
  );
  const playersFormData = updateFields<PlayersFormInput>(
    playersFormInitialValues,
    form
  );
  const rulesFormData = updateFields<RulesFormInput>(
    rulesFormInitialValues,
    form
  );

  return (
    <>
      <Stepper steps={steps} current={currentStep} goToStep={goToStep} />

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
