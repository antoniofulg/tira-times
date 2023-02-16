import { createContext, Dispatch, ReactNode, useReducer } from "react";
import {
  GenerateListFormActions,
  generateListFormReducer,
} from "@/presentation/pages/GenerateList/components/GenerateListForm/hooks/GenerateListFormReducer";
import {
  basicInfoFormInitialValues,
  BasicInfoFormInput,
  playersFormInitialValues,
  PlayersFormInput,
  rulesFormInitialValues,
  RulesFormInput,
} from "@/domain/schemas";

export type GenerateListFormType = BasicInfoFormInput &
  PlayersFormInput &
  RulesFormInput;

export type Step = {
  label: string;
  concluded: boolean;
};

export type GenerateListContextState = {
  form: GenerateListFormType;
  currentStep: number;
  steps: Step[];
};

export const initialValues: GenerateListContextState = {
  form: {
    ...basicInfoFormInitialValues,
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

const GenerateListFormContext = createContext<{
  state: GenerateListContextState;
  dispatch: Dispatch<GenerateListFormActions>;
}>({
  state: initialValues,
  dispatch: () => null,
});

type GenerateListFormProviderProps = {
  children: ReactNode;
};

const GenerateListFormProvider = ({
  children,
}: GenerateListFormProviderProps) => {
  const [state, dispatch] = useReducer(generateListFormReducer, initialValues);

  return (
    <GenerateListFormContext.Provider value={{ state, dispatch }}>
      {children}
    </GenerateListFormContext.Provider>
  );
};

export { GenerateListFormProvider, GenerateListFormContext };
