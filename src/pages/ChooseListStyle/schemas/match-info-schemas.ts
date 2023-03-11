import {
  matchInfoFormSchema,
  MatchInfoInput,
} from "@/pages/MatchInfo/schemas/match-info-form-schemas";
import dayjs from "dayjs";
import { z } from "zod";

export const matchInfoSchema = matchInfoFormSchema.transform((matchInfo) => {
  const initialDate = dayjs(
    `${matchInfo.date} ${matchInfo.time}`,
    "YYYY-MM-DD HH:mm"
  );
  const begin = initialDate.toDate();
  const end = initialDate.add(parseInt(matchInfo.duration), "minutes").toDate();

  return {
    players: parseInt(matchInfo.players),
    substitutes: matchInfo.substitutes ? parseInt(matchInfo.substitutes) : null,
    place: matchInfo.place,
    matchName: matchInfo.matchName,
    rules: matchInfo.rules,
    begin,
    end,
  };
});

export type MatchInfo = z.output<typeof matchInfoSchema>;

export const parseMatchInfo = (
  matchInfoForm: MatchInfoInput
): MatchInfo | null => {
  try {
    return matchInfoSchema.parse(matchInfoForm);
  } catch {
    return null;
  }
};
