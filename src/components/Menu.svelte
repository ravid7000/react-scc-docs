<script>
  import { createEventDispatcher } from "svelte";
  export let items = [];
  export let active;

  const dispatch = createEventDispatcher();

  function onClick(elm) {
    dispatch("itemClick", elm);
  }
</script>

<ul>
  {#each items as item}
    <li class:active={active === item.slug}>
      <a href="/docs/#{item.slug}" on:click={() => onClick(item)}>
        {item.metadata.title}
      </a>
    </li>
  {/each}
</ul>

<style>
  ul {
    list-style-type: none;
    padding-left: 0;
    margin: 0;
  }

  a {
    display: block;
    padding: 4px var(--spacing-sm);
    text-decoration: none;
    border-radius: 4px;
    margin-bottom: 4px;
    font-size: 1rem;
  }
  a:hover {
    background-color: var(--menu-item);
  }

  li.active a {
    background-color: var(--menu-item);
  }
</style>
