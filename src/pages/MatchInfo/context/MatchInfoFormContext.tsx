import { createContext, Dispatch, ReactNode, useReducer } from "react";
import {
  MatchInfoFormActions,
  matchInfoFormReducer,
} from "@/pages/MatchInfo/hooks/MatchInfoFormReducer";
import { Step } from "@/components/Stepper/Stepper";
import {
  eventFormInitialValues,
  EventFormInput,
  playersFormInitialValues,
  PlayersFormInput,
  rulesFormInitialValues,
  RulesFormInput,
} from "@/pages/MatchInfo/schemas/match-info-form-schemas";

export type MatchInfoContextState = {
  form: EventFormInput & PlayersFormInput & RulesFormInput;
  currentStep: number;
  steps: Step[];
};

export const initialValues: MatchInfoContextState = {
  form: {
    ...eventFormInitialValues,
    ...playersFormInitialValues,
    ...rulesFormInitialValues,
  },
  currentStep: 0,
  steps: [
    { label: "Informações", concluded: false },
    { label: "Jogadores", concluded: false },
    { label: "Regras", concluded: false },
  ],
};

const MatchInfoFormContext = createContext<{
  state: MatchInfoContextState;
  dispatch: Dispatch<MatchInfoFormActions>;
}>({
  state: initialValues,
  dispatch: () => null,
});

type MatchInfoFormProviderProps = {
  children: ReactNode;
};

const MatchInfoFormProvider = ({ children }: MatchInfoFormProviderProps) => {
  const [state, dispatch] = useReducer(matchInfoFormReducer, initialValues);

  return (
    <MatchInfoFormContext.Provider value={{ state, dispatch }}>
      {children}
    </MatchInfoFormContext.Provider>
  );
};

export { MatchInfoFormProvider, MatchInfoFormContext };
