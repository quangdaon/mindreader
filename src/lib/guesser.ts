import { selectedStrategy } from './stores';

export type GuessStrategy = {
  name: string;
  guess: (low: number, high: number) => number;
};

export const strategies: Record<string, GuessStrategy> = {
  random: {
    name: "Say and Pray (Random)",
    guess: (low: number, high: number) => {
      const range = high - low;
      return Math.floor(Math.random() * range) + low;
    },
  },
  binary: {
    name: "Binary Search",
    guess: (low: number, high: number) => {
      return Math.floor((low + high) / 2);
    },
  },
} as const;

export type StrategyKey = keyof typeof strategies;

export const guessNumber = (low: number, high: number): number => {
  const strategyKey: StrategyKey = selectedStrategy.get();
  const strategy = strategies[strategyKey];
  return strategy.guess(low, high);
};
