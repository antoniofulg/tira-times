import { MatchInfoInput } from "@/pages/MatchInfo/schemas/match-info-schemas";
import { setStorageItem } from "@/services/storage/local-storage";

export const storeMatchInfo = (matchInfo: MatchInfoInput) =>
  setStorageItem("match-info", matchInfo);
