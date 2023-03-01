import { Link } from "react-router-dom";

const NoListFound = () => {
  return (
    <div className="container px-4 pt-8 mx-auto">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-center text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Nenhuma lista encontrada!
      </h1>
      <div className="flex justify-around w-full">
        <Link className="button primary" to="/">
          Voltar para o início
        </Link>
        <Link className="button primary" to="/match-info">
          Ir para criação de partida
        </Link>
      </div>
    </div>
  );
};

export default NoListFound;
