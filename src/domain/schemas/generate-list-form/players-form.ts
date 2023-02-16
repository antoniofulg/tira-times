import { intTransformer } from "@/utils";
import { z } from "zod";

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
