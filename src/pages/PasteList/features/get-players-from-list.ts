export const getPlayersAndSubstitutes = (
  list: string
): { name: string; active: boolean }[] => {
  const startIndex =
    list.indexOf("Lista de Jogadores") + "Lista de Jogadores".length + 1;
  const endIndex = list.indexOf("Suplentes") - 1;
  const playersStr = list.substring(startIndex, endIndex);
  const players = playersStr
    .split("\n")
    .filter((player) => player.trim() !== "");

  const startIndexSubs = list.indexOf("Suplentes") + "Suplentes".length + 1;
  const subsStr = list.substring(startIndexSubs);
  const substitutes = subsStr.split("\n").filter((sub) => sub.trim() !== "");

  const playersAndSubstitutes = players
    .concat(substitutes)
    .map((name, index) => {
      const active = index < players.length;
      const nameWithoutIndex = name
        .replace(/^\d+(\s)?/, "")
        .replace(/^\d+️⃣?/, "")
        .trim();
      return { name: nameWithoutIndex, active };
    })
    .filter((player) => !!player.name);

  return playersAndSubstitutes;
};

export const checkListHasPlayers = (list: string) => {
  const startIndex =
    list.indexOf("Lista de Jogadores") + "Lista de Jogadores".length + 1;
  const endIndex = list.indexOf("Suplentes") - 1;
  const playersStr = list.substring(startIndex, endIndex);
  const players = playersStr
    .split("\n")
    .filter((player) => player.trim() !== "");

  const playersList = players
    .map((name, index) => {
      const active = index < players.length;
      const nameWithoutIndex = name
        .replace(/^\d+(\s)?/, "")
        .replace(/^\d+️⃣?/, "")
        .trim();
      return { name: nameWithoutIndex, active };
    })
    .filter((player) => !!player.name);

  return !!playersList.length;
};
