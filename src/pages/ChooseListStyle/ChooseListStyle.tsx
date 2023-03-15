import { getMatchInfo } from "./features/get-match-info";
import { parseMatchInfo, MatchInfo } from "./schemas/match-info-schemas";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { ChooseListStyleForm, NoMatchInfoFound } from "./components";

const ChooseListStyle = () => {
  const [matchInfo, setMatchInfo] = useState<MatchInfo | null>(null);
  const submitHandler = (list: string) => {
    toast.success("Lista copiada, agora é só compartilhar com sua turma!");
    navigator.clipboard.writeText(list);
  };

  useEffect(() => {
    const matchInfoInput = getMatchInfo();
    const matchInfo = matchInfoInput ? parseMatchInfo(matchInfoInput) : null;
    setMatchInfo(matchInfo);
  }, []);

  return (
    <div className="container px-4 pt-8 mx-auto">
      {matchInfo && (
        <ChooseListStyleForm matchInfo={matchInfo} onSubmit={submitHandler} />
      )}
      {!matchInfo && <NoMatchInfoFound />}
    </div>
  );
};

export default ChooseListStyle;
