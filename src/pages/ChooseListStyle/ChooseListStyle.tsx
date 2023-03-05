import { useNavigate } from "react-router-dom";
import { getMatchInfo } from "./features/get-match-info";
import ChooseListStyleForm from "./components/ChooseListStyleForm/ChooseListStyleForm";
import NoListFound from "./components/NoListFound/NoListFound";
import {
  ChooseListStyleFormInput,
  chooseListStyleInitialValues,
} from "./schemas/choose-list-style-schemas";

const ChooseListStyle = () => {
  const matchInfo = getMatchInfo();
  const navigate = useNavigate();

  const submitHandler = (data: ChooseListStyleFormInput) => {
    navigate(`${data.type}`);
  };

  return (
    <div className="container px-4 pt-8 mx-auto">
      {matchInfo && (
        <ChooseListStyleForm
          defaultValues={chooseListStyleInitialValues}
          onSubmit={submitHandler}
        />
      )}
      {!matchInfo && <NoListFound />}
    </div>
  );
};

export default ChooseListStyle;
