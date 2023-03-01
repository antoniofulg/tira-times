import { useNavigate } from "react-router-dom";
import { getMatchInfo } from "./actions/get-match-info";
import CopyListForm from "./components/CopyListForm/CopyListForm";
import NoListFound from "./components/NoListFound/NoListFound";
import {
  CopyListFormInput,
  copyListInitialValues,
} from "./schemas/copy-list-schemas";

const CopyList = () => {
  const matchInfo = getMatchInfo();
  const navigate = useNavigate();

  const submitHandler = (data: CopyListFormInput) => {
    navigate(`${data.type}`);
  };

  return (
    <div className="container px-4 pt-8 mx-auto">
      {matchInfo && (
        <CopyListForm
          defaultValues={copyListInitialValues}
          onSubmit={submitHandler}
        />
      )}
      {!matchInfo && <NoListFound />}
    </div>
  );
};

export default CopyList;
