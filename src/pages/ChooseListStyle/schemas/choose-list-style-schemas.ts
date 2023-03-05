import { z } from "zod";

export const chooseListStyleFormSchema = z.object({
  type: z.string().refine((value) => value === "simple" || value === "styled"),
});

export const chooseListStyleInitialValues = {
  type: "",
};

export type ChooseListStyleFormInput = z.input<
  typeof chooseListStyleFormSchema
>;
