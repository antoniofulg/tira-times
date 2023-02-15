import { createContext, Dispatch, ReactNode, useReducer } from "react";
import * as z from "zod";
import { intTransformer } from "@/utils";
import {
  GenerateListFormActions,
  generateListFormReducer,
} from "@/presentation/pages/GenerateList/components/GenerateListForm/hooks/GenerateListFormReducer";

export const basicInfoFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Deve conter pelo menos 2 caracteres" })
    .trim(),
  place: z
    .string()
    .min(2, { message: "Deve conter pelo menos 2 caracteres" })
    .trim(),
  date: z
    .string()
    .length(10)
    .refine(
      (value) => !!value && !isNaN(Date.parse(new Date(value).toISOString())),
      {
        message: "Informe uma data válida",
      }
    ),
  time: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, {
    message: "Informe um horário válido",
  }),
  duration: z
    .string()
    .optional()
    .default("")
    .refine((value) => intTransformer(value) >= 0, {
      message: "Informe um valor positivo",
    }),
});

export const basicInfoFormInitialValues = {
  name: "",
  place: "",
  date: "",
  time: "",
  duration: "",
};

export const playersFormSchema = z.object({
  players: z.string().refine((value) => intTransformer(value) >= 4, {
    message: "Informe um valor maior ou igual a 4",
  }),
  substitutes: z
    .string()
    .optional()
    .default("")
    .refine((value) => intTransformer(value) >= 0, {
      message: "Informe um valor positivo",
    }),
});

export const playersFormInitialValues = {
  players: "",
  substitutes: "",
};

export const rulesFormSchema = z.object({
  rules: z.string().optional().default(""),
});

export const rulesFormInitialValues = {
  rules: "",
};

export type BasicInfoFormInput = z.input<typeof basicInfoFormSchema>;
export type PlayersFormInput = z.input<typeof playersFormSchema>;
export type RulesFormInput = z.input<typeof rulesFormSchema>;

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
