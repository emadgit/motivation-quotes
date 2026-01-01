import { quotes } from './quotes';

export function getMotivationQuote(): string {
  const index = Math.floor(Math.random() * quotes.length);
  return quotes[index];
}

export function getUniqueMotivationQuotes(
  count: number
): string[] {
  if (count <= 0) return [];

  const shuffled = [...quotes].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.min(count, quotes.length));
}

function validateQuote(quote: string) {
  const lines = quote.split('\n');
  if (lines.length > 2) {
    throw new Error(`Quote exceeds 2 lines: "${quote}"`);
  }
}

quotes.forEach(validateQuote);
