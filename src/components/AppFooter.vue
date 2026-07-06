<template>
  <footer class="footer">
    <div class="wordmark">ruben.dev</div>
    <div class="links">
      <a href="mailto:hey@ruben.dev" class="footer-link">email</a>
      <a href="https://www.linkedin.com/in/ruben-de-beer-578b8a20b/" target="_blank" rel="noopener" class="footer-link">linkedin</a>
      <a href="https://github.com/rubendebeer" target="_blank" rel="noopener" class="footer-link">github</a>
    </div>
    <div class="copy">© 2026 Ruben de Beer · notes &amp; opinions</div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--hair);
  padding: 36px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
}

.wordmark {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 18px;
  color: var(--ink);
}

.links {
  display: flex;
  gap: 22px;
  font-family: var(--font-mono);
  font-size: 14px;
}

.footer-link {
  text-decoration: none;
  color: var(--ink-2);
  transition: color .15s ease;
}
.footer-link:hover { color: var(--c-accent-purple); }

.copy {
  color: var(--ink-3);
  font-size: 13px;
  font-family: var(--font-body);
}
</style>
