import { MatchInfoFormProvider } from "./context/MatchInfoFormContext";
import MatchInfoForm from "./components/MatchInfoForm/MatchInfoForm";
import { storeMatchInfo } from "./actions/set-match-info";

const MatchInfo = () => {
  return (
    <MatchInfoFormProvider>
      <div className="container px-4 pt-8 mx-auto">
        <MatchInfoForm onSubmit={storeMatchInfo} />
      </div>
    </MatchInfoFormProvider>
  );
};

export default MatchInfo;
