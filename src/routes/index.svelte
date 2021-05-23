<svelte:head>
  <title>React SCC</title>
</svelte:head>

<div class="container">
  <section class="section" id="top">
    <div class="logo">
      <img src="react-scc-logo.svg" alt="react-scc logo" />
      <h1 class="text">React SCC</h1>
      <p>Pattern to build React component</p>
      <a href="/docs" class="button">View Documentation</a>
    </div>
  </section>
</div>

<style>
  .container {
    padding: var(--spacing);
    margin-left: auto;
    margin-right: auto;
    max-width: 900px;
  }

  .section {
    padding-top: 150px;
    padding-bottom: 150px;
    padding-left: var(--spacing-lg);
    padding-right: var(--spacing-lg);
    text-align: center;
  }

  .logo img {
    width: 100px;
  }

  .logo .text {
    font-weight: 400;
    margin-bottom: 0;
  }

  p {
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  .button {
    display: inline-flex;
    padding: 4px 12px;
    background-color: #f1f1f1;
    color: var(--body-bg);
    text-decoration: none;
    border-radius: 2px;
  }
</style>
