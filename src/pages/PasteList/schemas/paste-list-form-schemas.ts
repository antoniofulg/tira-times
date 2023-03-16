import { z } from "zod";
import { checkListHasPlayers } from "../features/get-players-from-list";

export const pasteListFormSchema = z.object({
  matchList: z.string().refine((value) => checkListHasPlayers(value), {
    message: "Informe uma lista com jogadores",
  }),
});

export type PasteListFormInput = z.input<typeof pasteListFormSchema>;
