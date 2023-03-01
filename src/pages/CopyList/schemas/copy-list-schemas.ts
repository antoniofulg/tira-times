import { z } from "zod";

export const copyListFormSchema = z.object({
  type: z.string().refine((value) => value === "simple" || value === "styled"),
});

export const copyListInitialValues = {
  type: "",
};

export type CopyListFormInput = z.input<typeof copyListFormSchema>;
