import {
  BasicInfoFormType,
  GenerateListContextState,
  initialValues,
  PlayersFormType,
  RulesFormType,
} from "@/presentation/pages/GenerateList/components/GenerateListForm/context/GenerateListFormContext";

type FormActionTypes =
  | {
      type: "UPDATE_FORM";
      payload: BasicInfoFormType | PlayersFormType | RulesFormType;
    }
  | {
      type: "RESET_FORM";
    };

type StepActionTypes =
  | {
      type: "NEXT_STEP";
    }
  | {
      type: "PREV_STEP";
    }
  | {
      type: "GO_TO_STEP";
      payload: number;
    };

export type GenerateListFormActions = FormActionTypes | StepActionTypes;

export const generateListFormReducer = (
  state: GenerateListContextState,
  action: GenerateListFormActions
): GenerateListContextState => {
  switch (action.type) {
    case "GO_TO_STEP":
      return { ...state, step: action.payload };
    case "NEXT_STEP":
      return { ...state, step: state.step + 1 };
    case "PREV_STEP":
      return { ...state, step: state.step - 1 };
    case "UPDATE_FORM":
      return { ...state, form: { ...state.form, ...action.payload } };
    case "RESET_FORM":
      return { ...initialValues };
  }
};
