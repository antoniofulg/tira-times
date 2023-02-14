// import { createContext } from "react";
import { intTransformer } from "@/utils";
import * as z from "zod";

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
      .transform((e) => (e === "" ? undefined : e)),
  })
  .partial({
    rules: true,
  });
