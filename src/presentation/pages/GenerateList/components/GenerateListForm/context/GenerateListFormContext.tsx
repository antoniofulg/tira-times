import { createContext, Dispatch, ReactNode, useReducer } from "react";
import * as z from "zod";
import { intTransformer } from "@/utils";
import {
  GenerateListFormActions,
  generateListFormReducer,
} from "@/presentation/pages/GenerateList/components/GenerateListForm/hooks/GenerateListFormReducer";

export const basicInfoFormSchema = z
  .object({
    name: z
      .string()
      .min(2, { message: "Deve conter pelo menos 2 caracteres" })
      .trim(),
    place: z
      .string()
      .min(2, { message: "Deve conter pelo menos 2 caracteres" })
      .trim(),
    date: z.date({
      required_error: "Campo obrigatório",
      invalid_type_error: "Informe uma data válida",
    }),
    time: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, {
      message: "Informe um horário válido",
    }),
    duration: z.preprocess(
      (value) => intTransformer(String(value)),
      z
        .number()
        .int({ message: "Informe um valor válido" })
        .min(0, { message: "Informe um valor maior ou igual a 0" })
        .finite({ message: "Informe um valor finito" })
    ),
  })
  .partial({
    duration: true,
  });

export const basicInfoFormInitialValues = {
  name: "",
  place: "",
  date: new Date(),
  time: "",
  duration: 0,
};

export const playersFormSchema = z
  .object({
    players: z.preprocess(
      (value) => intTransformer(String(value)),
      z
        .number()
        .int({ message: "Informe um valor válido" })
        .min(4, { message: "Informe um valor maior ou igual a 4" })
        .finite({ message: "Informe um valor finito" })
    ),
    substitutes: z.preprocess(
      (value) => intTransformer(String(value)),
      z
        .number()
        .int({ message: "Informe um valor válido" })
        .min(0, { message: "Informe um valor maior ou igual a 0" })
        .finite({ message: "Informe um valor finito" })
    ),
  })
  .partial({
    substitutes: true,
  });

export const playersFormInitialValues = {
  players: 0,
  substitutes: 0,
};

export const rulesFormSchema = z
  .object({
    rules: z
      .union([z.string().length(0), z.string().min(4)])
      .default("")
      .optional()
      .transform((value) => String(value).trim()),
  })
  .partial({
    rules: true,
  });

export const rulesFormInitialValues = {
  rules: "",
};

export type BasicInfoFormType = z.infer<typeof basicInfoFormSchema>;
export type PlayersFormType = z.infer<typeof playersFormSchema>;
export type RulesFormType = z.infer<typeof rulesFormSchema>;

export type GenerateListFormType = BasicInfoFormType &
  PlayersFormType &
  RulesFormType;

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
