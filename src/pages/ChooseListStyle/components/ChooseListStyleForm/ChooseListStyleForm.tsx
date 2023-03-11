import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  ChooseListStyleFormInput,
  chooseListStyleFormSchema,
} from "@/pages/ChooseListStyle/schemas/choose-list-style-schemas";
import { Button } from "@/components";
import { createList } from "@/pages/ChooseListStyle/features/create-simple-list";
import { MatchInfo } from "@/pages/ChooseListStyle/schemas/match-info-schemas";

type ChooseListStyleFormProps = {
  onSubmit: (list: string) => void;
  defaultValues: ChooseListStyleFormInput;
  matchInfo: MatchInfo;
};

const ChooseListStyleForm = ({
  onSubmit,
  defaultValues,
  matchInfo,
}: ChooseListStyleFormProps) => {
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(chooseListStyleFormSchema),
    defaultValues,
  });

  const simpleList = createList(matchInfo, "simple");
  const styledList = createList(matchInfo, "styled");

  const submitHandler = (data: ChooseListStyleFormInput) => {
    if (data.type === "simple") onSubmit(simpleList);
    else if (data.type === "styled") onSubmit(styledList);
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
              <pre className="w-full h-60 md:h-full">{simpleList}</pre>
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
              <pre className="w-full h-60 md:h-full">{styledList}</pre>
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

export default ChooseListStyleForm;
