<script lang="ts">
  import Game from "./lib/components/Game.svelte";
  import StrategyPicker from "./lib/components/StrategyPicker.svelte";
  import Footer from "./lib/components/Footer.svelte";

  let started = $state(false);
</script>

<Game bind:started />
<StrategyPicker enabled={!started} />

<Footer />
