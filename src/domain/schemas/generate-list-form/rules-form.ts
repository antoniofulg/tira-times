import { z } from "zod";

export const rulesFormSchema = z.object({
  rules: z.string().optional().default(""),
});

export const rulesFormInitialValues = {
  rules: "",
};

export type RulesFormInput = z.input<typeof rulesFormSchema>;
