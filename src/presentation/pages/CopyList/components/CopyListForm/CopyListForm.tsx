import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  CopyListFormInput,
  copyListFormSchema,
} from "@/presentation/pages/CopyList/schemas/copy-list-schemas";
import {
  simpleListExample,
  styledListExample,
} from "@/presentation/pages/CopyList/placeholders/list-examples";
import { Button } from "@/presentation/components";

type CopyListFormProps = {
  onSubmit: (data: CopyListFormInput) => void;
  defaultValues: CopyListFormInput;
};

const CopyListForm = ({ onSubmit, defaultValues }: CopyListFormProps) => {
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(copyListFormSchema),
    defaultValues,
  });

  const submitHandler = (data: CopyListFormInput) => {
    onSubmit(data);
  };

  return (
    <form className="w-full h-full" onSubmit={handleSubmit(submitHandler)}>
      <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">
        Escolha o estilo da sua lista:
      </h3>
      <ul className="grid w-full gap-6 md:grid-cols-2">
        <li>
          <input
            type="radio"
            id="simple"
            value="simple"
            className="hidden peer"
            {...register("type")}
          />
          <label
            htmlFor="simple"
            className="inline-flex justify-between w-full h-full p-5 overflow-auto text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <div className="flex align-top">
              <pre className="w-full h-60 md:h-full">{simpleListExample}</pre>
            </div>
          </label>
        </li>
        <li>
          <input
            type="radio"
            id="styled"
            value="styled"
            className="hidden peer"
            {...register("type")}
          />
          <label
            htmlFor="styled"
            className="inline-flex justify-between w-full h-full p-5 overflow-auto text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <div className="flex align-top">
              <pre className="w-full h-60 md:h-full">{styledListExample}</pre>
            </div>
          </label>
        </li>
      </ul>
      <div className="w-full my-4 md:w-auto md:flex md:justify-end">
        <Button color="primary" className="w-full md:w-auto">
          Confirmar
        </Button>
      </div>
    </form>
  );
};

export default CopyListForm;
