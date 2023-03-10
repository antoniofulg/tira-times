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

Data: 12/12 - TerÃ§a-feira

HorÃ¡rio: 20:00 Ã s 22:00

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
ð Quadra X ð

ð 12/12 - Quarta-feira ð

â° 20:00 Ã s 22:00 â°

ð Lista de Jogadores ð

0ï¸â£1ï¸â£
0ï¸â£2ï¸â£
0ï¸â£3ï¸â£
0ï¸â£4ï¸â£
0ï¸â£5ï¸â£
0ï¸â£6ï¸â£
0ï¸â£7ï¸â£
0ï¸â£8ï¸â£
0ï¸â£9ï¸â£
1ï¸â£0ï¸â£

ð Suplentes ð

0ï¸â£1ï¸â£
0ï¸â£2ï¸â£
0ï¸â£3ï¸â£
0ï¸â£4ï¸â£

ð Regras ð

[...]
```
