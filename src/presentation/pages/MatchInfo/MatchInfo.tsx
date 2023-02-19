import { MatchInfoFormProvider } from "./context/MatchInfoFormContext";
import MatchInfoForm from "./components/MatchInfoForm/MatchInfoForm";
import { storeMatch } from "./actions/match-info";

const MatchInfo = () => {
  return (
    <MatchInfoFormProvider>
      <div className="container px-4 pt-8 mx-auto">
        <MatchInfoForm storeMatch={storeMatch} />
      </div>
    </MatchInfoFormProvider>
  );
};

export default MatchInfo;
