<template>
  <nav aria-label="Main navigation" class="nav">
    <RouterLink to="/" class="logo">
      <span class="logo-mark">R</span>ruben.dev
    </RouterLink>
    <div class="nav-right">
      <button data-theme-toggle aria-label="Toggle dark mode" class="theme-btn">
        <svg class="icon-moon" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z"/>
        </svg>
        <svg class="icon-sun" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="4.2"/>
          <path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.1 5.1l1.6 1.6M17.3 17.3l1.6 1.6M18.9 5.1l-1.6 1.6M6.7 17.3l-1.6 1.6"/>
        </svg>
      </button>
      <RouterLink to="/" :class="['nav-link', { active: route.path === '/' }]">Home</RouterLink>
      <RouterLink to="/opinions" :class="['nav-link', { active: route.path.startsWith('/opinions') }]">Opinions</RouterLink>
      <RouterLink to="/notes" :class="['nav-link', { active: route.path.startsWith('/notes') }]">Notes</RouterLink>
      <RouterLink to="/contact" :class="['nav-link', { active: route.path === '/contact' }]">Contact</RouterLink>
    </div>
  </nav>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<style scoped>
.nav {
  position: sticky;
  top: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 40px;
  background: var(--nav);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--hair);
}

.logo {
  display: flex;
  align-items: center;
  gap: 11px;
  text-decoration: none;
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 20px;
  color: var(--ink);
  letter-spacing: -.02em;
}

.logo-mark {
  width: 32px;
  height: 32px;
  border-radius: 10px;
  background: var(--c-accent-purple);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  color: #fff;
}

.nav-right {
  display: flex;
  gap: 24px;
  font-size: 15px;
  font-weight: 600;
  align-items: center;
}

.theme-btn {
  border: 0;
  background: transparent;
  cursor: pointer;
  color: var(--ink-2);
  display: inline-flex;
  align-items: center;
  padding: 2px;
  margin-right: 2px;
  transition: color .15s ease;
}
.theme-btn:hover { color: var(--ink); }

.nav-link {
  text-decoration: none;
  color: var(--ink-2);
  transition: color .15s ease;
}
.nav-link:hover { color: var(--ink); }
.nav-link.active { color: var(--c-accent-purple); }
</style>
