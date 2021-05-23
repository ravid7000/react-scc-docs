<script context="module">
  export async function preload() {
    const sections = await this.fetch(`docs.json`).then((r) => r.json());
    return { sections };
  }
</script>

<script>
  import Sidebar from "../../components/Sidebar.svelte";

  import { onMount } from "svelte";

  export let sections = [];

  let active;

  onMount(() => {
    const hash = location.hash ? location.hash.split("#")[1] : "";
    if (sections.length) {
      const found = sections.find((section) => section.slug === hash);

      if (found) {
        active = found.slug;
      } else {
        active = sections[0].slug;
      }
    }
  });

  function itemClick(e) {
    if (e && e.detail && e.detail.slug) {
      active = e.detail.slug;
    }
  }
</script>

<svelte:head>
  <title>About</title>
</svelte:head>

<Sidebar {sections} {active} on:itemClick={itemClick} />

<div class="container">
  <section class="section section-lg" id="top">
    <div class="logo">
      <img class="logo-img" src="react-scc-logo.svg" alt="react-scc logo" />
      <div class="text">React SCC</div>
      <a
        href="https://www.npmjs.com/package/react-scc"
        rel="nofollow"
        target="_blank"
        class="link"
      >
        <img
          src="https://camo.githubusercontent.com/cb047486f2f13381f4d4e94eab0c85853cef0647ccc5231d399268ccd7dbf523/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f72656163742d7363632e737667"
          alt="NPM"
          data-canonical-src="https://img.shields.io/npm/v/react-scc.svg"
          style="max-width:100%;"
        />
      </a>
    </div>
  </section>
  {#each sections as section}
    <section class="section" id={section.slug}>
      <h2 class="section-title">{section.metadata.title}</h2>
      <div class="title-divider" />
      {@html section.html}
    </section>
  {/each}
</div>

<style>
  .container {
    margin-left: var(--sidebar-width);
    padding: var(--spacing);
  }

  .section {
    padding-top: 50px;
    padding-bottom: 50px;
    padding-left: var(--spacing-lg);
    padding-right: var(--spacing-lg);
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
  }

  .section-lg {
    padding-top: 70px;
    padding-bottom: 70px;
  }

  .section-title {
    margin-bottom: 4px;
  }

  .title-divider {
    border-bottom: 1px solid var(--border);
  }

  .logo {
    text-align: center;
  }

  .logo .logo-img {
    width: 60px;
  }

  .logo .text {
    font-size: 2rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 10px;
  }
</style>
