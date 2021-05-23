<script>
  export let segment;
</script>

<nav>
  <a href="." class="logo">
    <img src="react-scc-logo.svg" alt="react-scc logo" />
    <span class="text">React SCC</span>
  </a>
  <ul>
    <li>
      <a
        class="link"
        aria-current={segment === undefined ? "Home" : undefined}
        href=".">Home</a
      >
    </li>
    <li>
      <a
        class="link"
        aria-current={segment === "docs" ? "Docs" : undefined}
        href="/docs">Docs</a
      >
    </li>
    <li>
      <a
        class="link"
        target="_blank"
        rel="noopener"
        aria-current={segment === "Github" ? "Github" : undefined}
        href="https://github.com/ravid7000/react-scc">Github</a
      >
    </li>
  </ul>
</nav>

<style>
  nav {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    background-color: var(--header-bg);
    border-bottom: 1px solid var(--border);
    font-weight: 300;
    padding: 0 1em;
    z-index: 10;
    display: flex;
    justify-content: space-between;
    height: var(--header-height);
  }

  ul {
    margin: 0;
    padding: 0;
  }

  /* clearfix */
  ul::after {
    content: "";
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
  }

  [aria-current] {
    position: relative;
    display: inline-block;
  }

  [aria-current]::after {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 2px;
    background-color: var(--primary);
    display: block;
    bottom: -1px;
  }

  .link {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
  }

  .logo {
    display: inline-flex;
    align-items: center;
    text-decoration: none;
  }

  .logo img {
    width: 20px;
  }

  .logo .text {
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-left: 10px;
  }
</style>
