import { Button, Textarea } from "@/components";
import {
  RulesFormInput,
  rulesFormSchema,
} from "@/presentation/pages/MatchInfo/schemas/match-info-schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

type RulesFormProps = {
  onSubmit: (data: RulesFormInput) => void;
  prevStep: () => void;
  defaultValues: RulesFormInput;
};

const RulesForm = ({ onSubmit, prevStep, defaultValues }: RulesFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({
    resolver: zodResolver(rulesFormSchema),
    defaultValues,
  });

  const submitHandler = (data: RulesFormInput) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div className="grid grid-cols-1">
        <Textarea
          id="rules"
          label="Regras"
          rows={12}
          placeholder="Pagamento deve ..."
          {...register("rules")}
        ></Textarea>
      </div>
      <div className="flex justify-between">
        <Button color="secondary" onClick={prevStep}>
          Voltar
        </Button>
        <Button type="submit" color="primary" loading={isSubmitting}>
          Concluir
        </Button>
      </div>
    </form>
  );
};

export default RulesForm;
