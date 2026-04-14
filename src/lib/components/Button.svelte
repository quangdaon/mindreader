<script lang="ts">
  const { children, onclick } = $props();
</script>

<button type="button" {onclick}>
  {@render children()}
</button>

<style>
  button {
    cursor: pointer;
    padding: 0.5em 1em;
    font-size: 1em;
    font-family: inherit;
    border: none;
    background: var(--color-accent);
    color: #fff;
    border-radius: 0.25em;
  }
</style>
