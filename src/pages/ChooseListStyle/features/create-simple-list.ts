import { MatchInfo } from "@/pages/ChooseListStyle/schemas/match-info-schemas";
import "dayjs/locale/pt-br";
import dayjs from "dayjs";

type ListStyle = "simple" | "styled";

export const createList = (matchInfo: MatchInfo, type: ListStyle) => {
  let list = `${matchInfo.matchName}\n`;
  list += "\n";
  list += getLocal(matchInfo.place, type);
  list += "\n";
  list += getDate(matchInfo.begin, type);
  list += "\n";
  list += getTime(matchInfo.begin, matchInfo.end, type);
  list += "\n";
  list +=
    type === "simple"
      ? "Lista de jogadores\n"
      : addEmojisAround("Lista de Jogadores", "๐๏ธ");
  list += "\n";
  list += getPlayers(matchInfo.players, type);
  list += "\n";
  if (matchInfo.substitutes) {
    list +=
      type === "simple" ? "Suplentes\n" : addEmojisAround("Suplentes", "๐");
    list += "\n";
    list += getPlayers(matchInfo.substitutes, type);
    list += "\n";
  }

  if (matchInfo.rules) {
    list += type === "simple" ? "Regras\n" : addEmojisAround("Regras", "๐");
    list += "\n";
    list += matchInfo.rules;
  }

  return list;
};

const addEmojisAround = (text: string, emoji: string) =>
  `${emoji} ${text} ${emoji}\n`;

const getLocal = (place: string, type: ListStyle) => {
  if (type === "simple") return `Local: ${place}\n`;
  return addEmojisAround(place, "๐");
};

const getDate = (date: Date, type: ListStyle) => {
  if (type === "simple") return `Data: ${formatDate(date)}\n`;
  return addEmojisAround(formatDate(date), "๐");
};

const getTime = (begin: Date, end: Date, type: ListStyle) => {
  if (type === "simple")
    return `Horรกrio: ${formatTime(begin)} ร s ${formatTime(end)}\n`;
  return addEmojisAround(`${formatTime(begin)} ร s ${formatTime(end)}`, "โฐ");
};

const formatDate = (date: Date) =>
  dayjs(date).locale("pt-br").format("DD/MM - dddd");

const formatTime = (date: Date) => dayjs(date).locale("pt-br").format("HH:mm");

const getPlayers = (quantity: number, type: ListStyle) => {
  let text = "";
  for (let i = 1; i <= quantity; i++) {
    text += `${i} \n`;
  }
  if (type === "styled") {
    return replaceNumbersWithEmojis(text);
  }
  return text;
};

const replaceNumbersWithEmojis = (input: string): string => {
  const digitToEmoji: Record<string, string> = {
    "0": "0๏ธโฃ",
    "1": "1๏ธโฃ",
    "2": "2๏ธโฃ",
    "3": "3๏ธโฃ",
    "4": "4๏ธโฃ",
    "5": "5๏ธโฃ",
    "6": "6๏ธโฃ",
    "7": "7๏ธโฃ",
    "8": "8๏ธโฃ",
    "9": "9๏ธโฃ",
  };

  let output = "";

  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    const emoji = digitToEmoji[char];
    output += emoji ? emoji : char;
  }

  return output;
};
