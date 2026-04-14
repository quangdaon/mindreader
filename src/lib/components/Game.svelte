<script lang="ts">
  import Button from "./Button.svelte";

  import { guessNumber } from "../guesser";

  let { started = $bindable() } = $props();
  let guess: number = $state(0);
  let tries: number = $state(0);

  let low: number = $state(0);
  let high: number = $state(100);

  let correct: boolean = $state(false);

  type GuessResult = "higher" | "lower" | "correct";

  const resetGame = () => {
    correct = false;
    started = false;
    tries = 0;
    low = 0;
    high = 100;
  };

  const startGame = () => {
    resetGame();

    guess = Math.floor(Math.random() * high) + 1;
    started = true;
  };

  const makeGuess = (result: GuessResult) => {
    tries++;
    if (result === "higher") {
      low = guess + 1;
    } else if (result === "lower") {
      high = guess - 1;
    } else {
      correct = true;
      return;
    }

    guess = guessNumber(low, high);
  };
</script>

<main>
  <div class="content">
    {#if !started}
      <h1>Guess a number between 1 and 100!</h1>
      <Button onclick={startGame}>I'm Ready!</Button>
    {/if}

    {#if started}
      {#if !correct}
        <h1>My guess is {guess}</h1>
        <Button onclick={() => makeGuess("higher")}>Higher</Button>
        <Button onclick={() => makeGuess("lower")}>Lower</Button>
        <Button onclick={() => makeGuess("correct")}>Correct</Button>
      {:else}
        <h1>Yippee, your number is {guess}!</h1>
        <p>It took me {tries == 1 ? "1 try" : `${tries} tries`}.</p>
        <Button onclick={resetGame}>Play again</Button>
      {/if}
    {/if}
  </div>
</main>

<style>
  main {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
  }

  .content {
    text-align: center;
  }
</style>
