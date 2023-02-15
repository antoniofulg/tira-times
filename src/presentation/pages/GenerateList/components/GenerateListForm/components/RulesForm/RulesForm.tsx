import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  rulesFormSchema,
  RulesFormInput,
} from "@/presentation/pages/GenerateList/components/GenerateListForm/context/GenerateListFormContext";
import { Button } from "@/presentation/components";

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
        <div>
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Regras
          </label>
          <textarea
            id="message"
            rows={4}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-7"
            placeholder="Pagamento deve ..."
            {...register("rules")}
          ></textarea>
        </div>
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
