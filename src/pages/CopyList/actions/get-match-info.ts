import { MatchInfoInput } from "@/pages/MatchInfo/schemas/match-info-schemas";

export const getMatchInfo = () => {
  const matchInfo = localStorage.getItem("match-info");
  if (matchInfo === null) return matchInfo;
  return JSON.parse(matchInfo) as MatchInfoInput;
};
