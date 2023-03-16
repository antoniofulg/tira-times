export const getPlayersAndSubstitutes = (
  list: string
): { name: string; active: boolean }[] => {
  const startIndex =
    list.indexOf("Lista de Jogadores") + "Lista de Jogadores".length + 1;
  const endIndexSubs = list.indexOf("Suplentes") - 1;
  const playersStr = list.substring(startIndex, endIndexSubs);
  const players = playersStr
    .split("\n")
    .filter(
      (player) =>
        player.trim() !== "" &&
        !/^\d+\s*$/.test(player.trim()) &&
        !/^(\d+|\s*|\W*)$/.test(player.trim())
    );

  const startIndexSubs = list.indexOf("Suplentes") + "Suplentes".length + 1;
  const nextIndex = list.indexOf("Regras");
  const endIndex = nextIndex === -1 ? list.length : nextIndex;
  const subsStr = list.substring(startIndexSubs, endIndex);
  const substitutes = subsStr
    .split("\n")
    .filter((sub) => sub.trim() !== "" && !/^(\d+|\s*|\W*)$/.test(sub.trim()));

  const playersAndSubstitutes = players
    .concat(substitutes)
    .map((name, index) => {
      const active = index < players.length;
      const nameWithoutIndex = name
        .replace(/^\d+(?:\uFE0F\u20E3|\uFE0E)?\s*/, "")
        .trim();
      return { name: nameWithoutIndex, active };
    })
    .filter((player) => !!player.name);

  return playersAndSubstitutes;
};
