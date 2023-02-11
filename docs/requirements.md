# Business requirements

- Generate a list by providing the following info (required fields\*):
  - Title
  - Place\*
  - Date\*
  - Time\*
  - Duration
  - Max players\*
  - Max substitutes
- Should be possible to import all players in the list to make the draft.
- Should be possible to draft teams by different player categories and seeds.

# Technical requirements

- Mobile first
- Store previous list info on local storage

## Extra

- Should have different styles list (simple list, styled list).
- Add english version
- Should be possible to add description/rules at the end of list

#### Simple list

```text
Local: Quadra X

Data: 12/12 - Terça-feira

Horário: 20:00 às 22:00

Lista de jogadores
01-
02-
03-
04-
05-
06-
07-
08-
09-
10-

Suplentes
01-
02-
03-
04-

Regras

[...]
```

#### Styled list

```text
🏐 Quadra X 🏐

📅 12/12 - Quarta-feira 📅

⏰ 20:00 às 22:00 ⏰

📋 Lista de Jogadores 📋

0️⃣1️⃣
0️⃣2️⃣
0️⃣3️⃣
0️⃣4️⃣
0️⃣5️⃣
0️⃣6️⃣
0️⃣7️⃣
0️⃣8️⃣
0️⃣9️⃣
1️⃣0️⃣

🔁 Suplentes 🔁

0️⃣1️⃣
0️⃣2️⃣
0️⃣3️⃣
0️⃣4️⃣

📒 Regras 📒

[...]
```
