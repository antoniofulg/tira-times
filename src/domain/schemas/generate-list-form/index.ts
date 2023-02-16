import { BasicInfoFormInput } from "./basic-info-form";
import { PlayersFormInput } from "./players-form";
import { RulesFormInput } from "./rules-form";

export type GenerateListFormType = BasicInfoFormInput &
  PlayersFormInput &
  RulesFormInput;
