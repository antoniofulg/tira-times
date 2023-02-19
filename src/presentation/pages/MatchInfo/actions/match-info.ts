import { MatchInfoInput } from "@/presentation/pages/MatchInfo/schemas/match-info-schemas";

export const storeMatch = (matchInfo: MatchInfoInput) => {
  localStorage.setItem("match-info", JSON.stringify(matchInfo));
};
