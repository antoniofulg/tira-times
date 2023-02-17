import { MatchInfoFormProvider } from "./components/MatchInfoForm/context/MatchInfoFormContext";
import MatchInfoForm from "./components/MatchInfoForm/MatchInfoForm";

const MatchInfo = () => {
  return (
    <MatchInfoFormProvider>
      <div className="container px-4 pt-8 mx-auto">
        <MatchInfoForm />
      </div>
    </MatchInfoFormProvider>
  );
};

export default MatchInfo;
