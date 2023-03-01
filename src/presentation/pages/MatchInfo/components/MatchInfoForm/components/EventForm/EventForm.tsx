import { Button, Input } from "@/components";
import {
  EventFormInput,
  eventFormSchema,
} from "@/presentation/pages/MatchInfo/schemas/match-info-schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

type BasicInfoFormProps = {
  onSubmit: (data: EventFormInput) => void;
  defaultValues: EventFormInput;
};

const BasicInfoForm = ({ onSubmit, defaultValues }: BasicInfoFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(eventFormSchema),
    defaultValues,
  });

  const submitHandler = (data: EventFormInput) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-0">
        <div className="sm:col-span-2 md:col-span-4">
          <Input
            label="Nome do Racha"
            required
            aria-invalid={errors.matchName ? "true" : "false"}
            error={
              errors?.matchName?.message &&
              (errors?.matchName.message as string)
            }
            {...register("matchName")}
          />
        </div>
        <div className="md:col-span-2">
          <Input
            label="Local"
            required
            aria-invalid={errors.place ? "true" : "false"}
            error={errors?.place?.message && (errors?.place.message as string)}
            {...register("place")}
          />
        </div>
        <div className="md:col-span-2">
          <Input
            label="Data"
            required
            type="date"
            aria-invalid={errors.date ? "true" : "false"}
            error={errors?.date?.message && (errors?.date.message as string)}
            {...register("date")}
          />
        </div>
        <div className="md:col-span-2">
          <Input
            label="Horário"
            required
            type="time"
            aria-invalid={errors.time ? "true" : "false"}
            error={errors?.time?.message && (errors?.time.message as string)}
            {...register("time")}
          />
        </div>
        <div className="md:col-span-2">
          <Input
            label="Duração"
            hint="Em minutos"
            type="number"
            step="1"
            min="0"
            aria-invalid={errors.duration ? "true" : "false"}
            error={
              errors?.duration?.message && (errors?.duration.message as string)
            }
            {...register("duration")}
          />
        </div>
      </div>
      <div className="flex justify-end">
        <Button type="submit" color="primary" loading={isSubmitting}>
          Próximo
        </Button>
      </div>
    </form>
  );
};

export default BasicInfoForm;
