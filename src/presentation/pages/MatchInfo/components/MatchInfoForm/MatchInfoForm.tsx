import { Stepper } from "@/presentation/components";
import { updateFields } from "@/utils";
import {
  eventFormInitialValues,
  EventFormInput,
  playersFormInitialValues,
  PlayersFormInput,
  rulesFormInitialValues,
  RulesFormInput,
} from "@/presentation/pages/MatchInfo/schemas/match-info";
import { useContext } from "react";
import { EventForm, PlayersForm, RulesForm } from "./components";
import { MatchInfoFormContext } from "@/presentation/pages/MatchInfo/context/MatchInfoFormContext";

const MatchInfoForm = () => {
  const {
    state: { form, currentStep, steps },
    dispatch,
  } = useContext(MatchInfoFormContext);

  const submitHandler = async () => {
    // await saveGeneratedList.save(form);
    alert("Salvo!");
  };

  const nextStep = (
    payload: EventFormInput | PlayersFormInput | RulesFormInput
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

  const basicInfoFormData = updateFields<EventFormInput>(
    eventFormInitialValues,
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
        <EventForm defaultValues={basicInfoFormData} onSubmit={nextStep} />
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

export default MatchInfoForm;
