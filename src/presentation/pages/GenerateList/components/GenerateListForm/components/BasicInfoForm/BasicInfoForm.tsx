import { Input } from "@/presentation/components";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import {
  BasicInfoFormType,
  basicInfoFormSchema,
  basicInfoFormInitialValues,
} from "@/presentation/pages/GenerateList/components/GenerateListForm/context/GenerateListFormContext";
import { objectTypeChecker } from "@/utils/types/forms";

type BasicInfoFormProps = {
  onSubmit: (data: BasicInfoFormType) => void;
};

const BasicInfoForm = ({ onSubmit }: BasicInfoFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(basicInfoFormSchema),
  });

  const submitHandler = (data: FieldValues) => {
    if (objectTypeChecker(data, basicInfoFormInitialValues)) onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-0">
        <div className="sm:col-span-2 md:col-span-4">
          <Input
            label="Nome do Racha"
            required
            aria-invalid={errors.name ? "true" : "false"}
            error={errors?.name?.message && (errors?.name.message as string)}
            {...register("name")}
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
            {...register("date", { valueAsDate: true })}
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

export default BasicInfoForm;
