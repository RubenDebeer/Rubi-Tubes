<template>
  <div aria-hidden="true" style="position:fixed;inset:0;z-index:-1;background:var(--bg)"></div>
  <svg width="0" height="0" style="position:absolute" aria-hidden="true">
    <defs>
      <filter id="doodle">
        <feTurbulence type="turbulence" baseFrequency="0.018" numOctaves="2" seed="4" result="n">
          <animate attributeName="seed" values="3;5;7;9;11;9;7;5;3" dur="1.6s" calcMode="spline" keyTimes="0;0.125;0.25;0.375;0.5;0.625;0.75;0.875;1" keySplines=".4 0 .6 1;.4 0 .6 1;.4 0 .6 1;.4 0 .6 1;.4 0 .6 1;.4 0 .6 1;.4 0 .6 1;.4 0 .6 1" repeatCount="indefinite"></animate>
        </feTurbulence>
        <feDisplacementMap in="SourceGraphic" in2="n" scale="3.2"></feDisplacementMap>
      </filter>
    </defs>
  </svg>
  <RouterView />
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  if (!window.__rdTheme) {
    window.__rdTheme = true
    document.addEventListener('click', (e) => {
      const b = e.target.closest && e.target.closest('[data-theme-toggle]')
      if (!b) return
      e.preventDefault()
      const d = document.documentElement.classList.toggle('theme-dark')
      try { localStorage.setItem('rd-theme', d ? 'dark' : 'light') } catch {}
    })
    window.addEventListener('storage', (e) => {
      if (e.key === 'rd-theme') document.documentElement.classList.toggle('theme-dark', e.newValue === 'dark')
    })
  }
})
</script>
