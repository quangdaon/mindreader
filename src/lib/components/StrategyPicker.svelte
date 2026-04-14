<script>
  import { chosenStrategy } from "../stores";
  import { strategies } from "../guesser";
  import Button from "./Button.svelte";

  const { enabled } = $props();

  const currentStrategy = $derived(strategies[$chosenStrategy]);
</script>

<div class="container">
  <label for="strategy-select">Strategy:</label>
  <select id="strategy-select" bind:value={$chosenStrategy} disabled={!enabled}>
    {#each Object.entries(strategies) as [key, strategy]}
      <option value={key}>{strategy.name}</option>
    {/each}
  </select>
</div>

<style>
  .container {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }

  select {
    padding: 0.5em 1em;
    font-size: 1em;
    font-family: inherit;
    border: none;
    background: #337;
    color: #fff;
    border-radius: 0.25em;
  }

  select:disabled {
    background: #666;
  }
</style>
