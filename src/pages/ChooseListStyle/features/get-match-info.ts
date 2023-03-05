import { MatchInfoInput } from "@/pages/MatchInfo/schemas/match-info-schemas";
import { getStorageItem } from "@/services/storage/local-storage";

export const getMatchInfo = () => getStorageItem<MatchInfoInput>("match-info");
