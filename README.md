# motivation-quotes

A tiny TypeScript-first npm library that generates **short, punchy motivational quotes**.  
No essays. No fluff. Just momentum.

![iban-tools Banner](https://github.com/emadgit/ibanify/blob/main/img/motivation.png)

Each quote is **one line**, sometimes **two**, never more.

---

## Install

```bash
npm install motivation-quotes
```

---

## Usage

### Basic

```ts
import { getMotivationQuote } from 'motivation-quotes';

console.log(getMotivationQuote());
```

Example output:

```text
Do it tired.
```

---

### Multiple quotes

```ts
import { getUniqueMotivationQuotes } from 'motivation-quotes';

const quotes = getUniqueMotivationQuotes(5);
console.log(quotes);
```

---

## What this package is

- A large, growing collection of **original motivational quotes**
- Designed for apps, CLIs, widgets, bots, and dashboards
- Deterministic-free: unlimited calls, always fresh
- Written in **TypeScript**, ships with types

---

## What this package is NOT

- Not inspirational essays
- Not famous quotes with attribution
- Not overly positive or toxic optimism

This library favors **clarity, discipline, and quiet progress**.

---

## Philosophy

Motivation works best when it’s brief.

One sentence can move you.  
Two lines can steady you.  
Anything longer becomes noise.

---

## Quote rules

All quotes in this package follow these rules:

- Maximum **2 lines**
- Short enough to read in one breath
- Safe to display anywhere
- Original wording

---

## Use cases

- Daily quote features
- Developer tools / CLIs
- Productivity apps
- Notifications
- Widgets
- Personal dashboards

---

## License

MIT © Emad Dehnavi
