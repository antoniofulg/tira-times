import {
  MatchInfoContextState,
  initialValues,
} from "@/presentation/pages/MatchInfo/context/MatchInfoFormContext";
import {
  EventFormInput,
  PlayersFormInput,
  RulesFormInput,
} from "@/presentation/pages/MatchInfo/schemas/match-info-schemas";

type FormActionTypes =
  | {
      type: "UPDATE_FORM";
      payload: EventFormInput | PlayersFormInput | RulesFormInput;
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

export type MatchInfoFormActions = FormActionTypes | StepActionTypes;

export const matchInfoFormReducer = (
  state: MatchInfoContextState,
  action: MatchInfoFormActions
): MatchInfoContextState => {
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

const nextStep = (state: MatchInfoContextState) => {
  const { currentStep, steps } = state;
  steps[currentStep].concluded = true;
  return { ...state, currentStep: currentStep + 1, steps };
};

const prevStep = (state: MatchInfoContextState) => {
  const { currentStep, steps } = state;
  steps[currentStep - 1].concluded = false;
  return { ...state, currentStep: currentStep - 1, steps };
};

const goToStep = (state: MatchInfoContextState, payload: number) => {
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
