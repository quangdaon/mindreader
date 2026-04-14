import { writable } from "svelte/store";
import type { StrategyKey } from "./guesser";

export const chosenStrategy = writable<StrategyKey>("random");
