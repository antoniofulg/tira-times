import { Card } from "@/components";

const Home = () => {
  return (
    <div className="container px-4 pt-8 mx-auto">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-center text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Sorteie os times do seu racha de forma rápida e fácil com o nosso
        aplicativo inteligente!
      </h1>
      <p className="mb-6 text-lg font-normal text-center text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        Com o nosso aplicativo, você pode facilmente criar uma lista de
        jogadores para o seu racha e deixar que a nossa tecnologia inteligente
        faça o trabalho pesado para você. Usando algoritmos avançados, o
        aplicativo irá automaticamente sortear os times de forma balanceada para
        que cada partida seja justa e equilibrada.
      </p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-6">
        <div className="lg:col-span-2 lg:col-start-2">
          <Card
            title="Desejo criar uma lista"
            description="Crie uma lista personalizada para o seu racha em segundos! Insira as principais informações do seu evento, e deixe que nosso aplicativo faça o resto. Em poucos cliques, você terá uma lista pronta para enviar para o seu grupo e começar a planejar a sua partida."
            link="/match-info"
          />
        </div>
        <div className="lg:col-span-2">
          <Card
            title="Já possuo uma lista preenchida"
            description="Não perca tempo digitando nomes novamente! Importe facilmente uma lista de jogadores preenchida anteriormente para o nosso aplicativo e deixe que ele busque automaticamente os nomes dos jogadores para você."
            link="/paste-list"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
