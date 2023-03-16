import { z } from "zod";

export const pasteListFormSchema = z.object({
  matchList: z.string(),
});

export type PasteListFormInput = z.input<typeof pasteListFormSchema>;
