import {
  BasicInfoFormInput,
  PlayersFormInput,
  RulesFormInput,
} from "@/domain/schemas";
import {
  GenerateListContextState,
  initialValues,
} from "@/presentation/pages/GenerateList/components/GenerateListForm/context/GenerateListFormContext";

type FormActionTypes =
  | {
      type: "UPDATE_FORM";
      payload: BasicInfoFormInput | PlayersFormInput | RulesFormInput;
    }
  | {
      type: "RESET_FORM";
    };

type StepActionTypes =
  | {
      type: "NEXT_STEP";
    }
  | {
      type: "PREV_STEP";
    }
  | {
      type: "GO_TO_STEP";
      payload: number;
    };

export type GenerateListFormActions = FormActionTypes | StepActionTypes;

export const generateListFormReducer = (
  state: GenerateListContextState,
  action: GenerateListFormActions
): GenerateListContextState => {
  switch (action.type) {
    case "GO_TO_STEP":
      return goToStep(state, action.payload);
    case "NEXT_STEP":
      return nextStep(state);
    case "PREV_STEP":
      return prevStep(state);
    case "UPDATE_FORM":
      return { ...state, form: { ...state.form, ...action.payload } };
    case "RESET_FORM":
      return { ...initialValues };
  }
};

const nextStep = (state: GenerateListContextState) => {
  const { currentStep, steps } = state;
  steps[currentStep].concluded = true;
  return { ...state, currentStep: currentStep + 1, steps };
};

const prevStep = (state: GenerateListContextState) => {
  const { currentStep, steps } = state;
  steps[currentStep - 1].concluded = false;
  return { ...state, currentStep: currentStep - 1, steps };
};

const goToStep = (state: GenerateListContextState, payload: number) => {
  const { currentStep, steps } = state;
  if (currentStep > payload)
    return {
      ...state,
      currentStep: payload,
      steps: steps.map((step, index) => ({
        ...step,
        concluded: index < payload,
      })),
    };
  return state;
};
