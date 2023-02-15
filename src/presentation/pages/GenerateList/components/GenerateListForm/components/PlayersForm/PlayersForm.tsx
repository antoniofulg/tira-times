import { Input } from "@/presentation/components";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  PlayersFormInput,
  playersFormSchema,
} from "@/presentation/pages/GenerateList/components/GenerateListForm/context/GenerateListFormContext";

type PlayersFormProps = {
  onSubmit: (data: PlayersFormInput) => void;
  prevStep: () => void;
  defaultValues: PlayersFormInput;
};

const PlayersForm = ({
  onSubmit,
  prevStep,
  defaultValues,
}: PlayersFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(playersFormSchema),
    defaultValues,
  });

  const submitHandler = (data: PlayersFormInput) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-0">
        <div>
          <Input
            label="Jogadores"
            required
            type="number"
            step="1"
            min="0"
            aria-invalid={errors.players ? "true" : "false"}
            error={
              errors?.players?.message && (errors?.players.message as string)
            }
            {...register("players")}
          />
        </div>
        <div>
          <Input
            label="Suplentes"
            type="number"
            step="1"
            min="0"
            aria-invalid={errors.substitutes ? "true" : "false"}
            error={
              errors?.substitutes?.message &&
              (errors?.substitutes.message as string)
            }
            {...register("substitutes")}
          />
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
          Próximo
        </button>
      </div>
    </form>
  );
};

export default PlayersForm;
