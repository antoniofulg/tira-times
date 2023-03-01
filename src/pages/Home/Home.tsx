import { Card } from "@/components";

const Home = () => {
  return (
    <div className="container px-4 pt-8 mx-auto">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-center text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        O jeito mais fácil de sortear os times do seu racha
      </h1>
      <p className="mb-6 text-lg font-normal text-center text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        Gere uma lista de jogadores com todas as informações do seu racha, e
        então sorteie os times com várias opções de balanceamento para deixar as
        partidas mais equilibradas!
      </p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-6">
        <div className="lg:col-span-2 lg:col-start-2">
          <Card
            title="Criar lista"
            description="Insira as principais informações do seu racha para criar uma lista personalizada pronta para enviar para seu grupo."
            link="/match-info"
          />
        </div>
        <div className="lg:col-span-2">
          <Card
            title="Sortear times"
            description="Insira uma lista gerada anteriormente já preenchida para buscar o nome dos jogadores automaticamente"
            link="/draft"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
