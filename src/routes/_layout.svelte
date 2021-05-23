<script>
  import Nav from "../components/Nav.svelte";

  export let segment;

  console.log({ segment });
</script>

<Nav {segment} />

<div>
  <slot />
</div>
