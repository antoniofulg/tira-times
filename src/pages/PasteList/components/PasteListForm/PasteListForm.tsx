import { Button, Textarea } from "@/components";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  PasteListFormInput,
  pasteListFormSchema,
} from "@/pages/PasteList/schemas/paste-list-form-schemas";

type PasteListFormProps = {
  onSubmit: (data: PasteListFormInput) => void;
};

const PasteListForm = ({ onSubmit }: PasteListFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({
    resolver: zodResolver(pasteListFormSchema),
    defaultValues: { matchList: "" },
  });

  const submitHandler = (data: PasteListFormInput) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <h3 className="mb-5 text-lg text-center font-medium text-gray-900 dark:text-white">
        Copie a lista do seu racha no campo abaixo, para importar todos os
        jogadores automaticamente!
      </h3>
      <div className="grid grid-cols-1">
        <Textarea
          label="Lista do racha"
          rows={16}
          placeholder="Copie aqui..."
          {...register("matchList")}
        ></Textarea>
      </div>
      <div className="grid grid-cols-1">
        <Button
          type="submit"
          color="primary"
          className="w-full"
          loading={isSubmitting}
        >
          Importar jogadores
        </Button>
      </div>
    </form>
  );
};

export default PasteListForm;
