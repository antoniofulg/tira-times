import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  rulesFormSchema,
  RulesFormInput,
} from "@/presentation/pages/GenerateList/components/GenerateListForm/context/GenerateListFormContext";

type RulesFormProps = {
  onSubmit: (data: RulesFormInput) => void;
  prevStep: () => void;
  defaultValues: RulesFormInput;
};

const RulesForm = ({ onSubmit, prevStep, defaultValues }: RulesFormProps) => {
  const { register, handleSubmit } = useForm({
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
        <button
          type="button"
          className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          onClick={prevStep}
        >
          Voltar
        </button>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Concluir
        </button>
      </div>
    </form>
  );
};

export default RulesForm;
