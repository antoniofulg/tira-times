import { intTransformer } from "@/shared";
import { z } from "zod";

export const eventFormSchema = z.object({
  matchName: z
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

export const eventFormInitialValues = {
  matchName: "",
  place: "",
  date: "",
  time: "",
  duration: "",
};

export type EventFormInput = z.input<typeof eventFormSchema>;

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

export type PlayersFormInput = z.input<typeof playersFormSchema>;

export const rulesFormSchema = z.object({
  rules: z.string().optional().default(""),
});

export const rulesFormInitialValues = {
  rules: "",
};

export const matchInfoFormSchema = eventFormSchema
  .merge(playersFormSchema)
  .merge(rulesFormSchema);

export type RulesFormInput = z.input<typeof rulesFormSchema>;

export type MatchInfoInput = EventFormInput & PlayersFormInput & RulesFormInput;
