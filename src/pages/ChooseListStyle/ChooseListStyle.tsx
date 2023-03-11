import { getMatchInfo } from "./features/get-match-info";
import ChooseListStyleForm from "./components/ChooseListStyleForm/ChooseListStyleForm";
import NoListFound from "./components/NoListFound/NoListFound";
import { parseMatchInfo } from "./schemas/match-info-schemas";

const matchInfoInput = getMatchInfo();
const matchInfo = matchInfoInput ? parseMatchInfo(matchInfoInput) : null;

const ChooseListStyle = () => {
  const submitHandler = (list: string) => {
    navigator.clipboard.writeText(list);
  };

  return (
    <div className="container px-4 pt-8 mx-auto">
      {matchInfo && (
        <ChooseListStyleForm matchInfo={matchInfo} onSubmit={submitHandler} />
      )}
      {!matchInfo && <NoListFound />}
    </div>
  );
};

export default ChooseListStyle;
