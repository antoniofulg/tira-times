import { createContext, Dispatch, ReactNode, useReducer } from "react";
import * as z from "zod";
import { intTransformer } from "@/utils";
import {
  GenerateListFormActions,
  generateListFormReducer,
} from "@/presentation/pages/GenerateList/components/GenerateListForm/hooks/GenerateListFormReducer";

export const basicInfoFormSchema = z
  .object({
    name: z.string().min(2, { message: "Deve conter pelo menos 2 caracteres" }),
    place: z
      .string()
      .min(2, { message: "Deve conter pelo menos 2 caracteres" }),
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

export const rulesFormSchema = z
  .object({
    rules: z
      .union([z.string().length(0), z.string().min(4)])
      .optional()
      .transform((value) => (value === "" ? null : value)),
  })
  .partial({
    rules: true,
  });

export type BasicInfoFormType = z.infer<typeof basicInfoFormSchema>;
export type PlayersFormType = z.infer<typeof playersFormSchema>;
export type RulesFormType = z.infer<typeof rulesFormSchema>;

export type GenerateListFormType = BasicInfoFormType &
  PlayersFormType &
  RulesFormType;

export type GenerateListContextState = {
  form: GenerateListFormType;
  step: number;
};

export const initialValues: GenerateListContextState = {
  form: {
    duration: 0,
    name: "",
    place: "",
    date: new Date(),
    time: "",
    substitutes: 0,
    players: 0,
    rules: "",
  },
  step: 0,
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
