import { z } from "zod";
import { getPlayersAndSubstitutes } from "../features/get-players-from-list";

export const pasteListFormSchema = z.object({
  matchList: z
    .string()
    .refine((value) => !!getPlayersAndSubstitutes(value).length, {
      message: "Informe uma lista com jogadores",
    }),
});

export type PasteListFormInput = z.input<typeof pasteListFormSchema>;
