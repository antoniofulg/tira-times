import { MatchInfoFormProvider } from "./context/MatchInfoFormContext";
import MatchInfoForm from "./components/MatchInfoForm/MatchInfoForm";
import { storeMatchInfo } from "./features/set-match-info";
import { useNavigate } from "react-router-dom";
import { MatchInfoInput } from "./schemas/match-info-form-schemas";
import { toast } from "react-toastify";

const MatchInfo = () => {
  const navigate = useNavigate();

  const submitHandler = (matchInfo: MatchInfoInput) => {
    try {
      storeMatchInfo(matchInfo);
      toast.success("Lista criada, selecione o estilo que você deseja!");
      navigate("/copy-list");
    } catch {
      toast.error("Não foi possível salvar a partida, tente novamente!");
    }
  };

  return (
    <MatchInfoFormProvider>
      <div className="container px-4 pt-8 mx-auto">
        <MatchInfoForm onSubmit={submitHandler} />
      </div>
    </MatchInfoFormProvider>
  );
};

export default MatchInfo;
