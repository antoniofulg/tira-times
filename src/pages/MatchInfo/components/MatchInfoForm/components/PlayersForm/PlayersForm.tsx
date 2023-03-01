import { Button, Input } from "@/components";
import {
  PlayersFormInput,
  playersFormSchema,
} from "@/pages/MatchInfo/schemas/match-info-schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

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
    formState: { errors, isSubmitting },
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
        <Button color="secondary" onClick={prevStep}>
          Voltar
        </Button>
        <Button type="submit" color="primary" loading={isSubmitting}>
          Próximo
        </Button>
      </div>
    </form>
  );
};

export default PlayersForm;
