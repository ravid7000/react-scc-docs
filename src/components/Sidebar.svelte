<script>
  import { createEventDispatcher } from "svelte";

  const dispath = createEventDispatcher();

  import Menu from "./Menu.svelte";
  export let sections = [];
  export let active;

  function itemClick(e) {
    dispath("itemClick", e.detail);
  }
</script>

<aside>
  <div class="container">
    <div class="body">
      <Menu items={sections} {active} on:itemClick={itemClick} />
    </div>
  </div>
</aside>

<style>
  aside {
    position: fixed;
    left: 0;
    top: var(--header-height);
    bottom: 0;
    z-index: 5;
    border-right: 1px solid var(--border);
    width: var(--sidebar-width);
  }
  .container {
    padding: var(--spacing-lg) var(--spacing-lg);
  }
</style>
