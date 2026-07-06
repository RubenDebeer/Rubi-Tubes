<template>
  <NavBar />

  <section class="contact-section">
    <div class="contact-inner">

      <div class="doodle-wrap">
        <div class="speech-bubble" style="animation:bobc 3.6s ease-in-out infinite">Awe, boet.</div>
        <svg viewBox="0 0 170 210" width="200" style="overflow:visible;animation:bobc 5.5s ease-in-out infinite" aria-hidden="true">
          <path filter="url(#doodle)" d="M6 206 Q85 212 168 202" fill="none" style="stroke:var(--ink)" stroke-width="3.5" stroke-linecap="round"/>
          <g filter="url(#doodle)" fill="none" style="stroke:var(--ink)" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="82" cy="48" r="26" style="fill:var(--surface)"/>
            <circle cx="72" cy="46" r="2.6" style="fill:var(--ink)" stroke="none"/>
            <circle cx="92" cy="46" r="2.6" style="fill:var(--ink)" stroke="none"/>
            <path d="M70 58 Q82 68 94 58"/>
            <path d="M82 74 L82 150"/>
            <path d="M82 150 L58 194"/>
            <path d="M82 150 L106 194"/>
            <path d="M82 96 L54 128"/>
            <g>
              <path d="M82 90 L122 58"/>
              <circle cx="124" cy="55" r="5" style="fill:var(--surface)"/>
              <animateTransform attributeName="transform" type="rotate" values="-3 82 90; -24 82 90; -3 82 90" dur="1.8s" calcMode="spline" keyTimes="0;0.5;1" keySplines=".37 0 .63 1;.37 0 .63 1" repeatCount="indefinite"/>
            </g>
          </g>
        </svg>
      </div>

      <div class="eyebrow">Contact</div>
      <h1 class="contact-h1">Say Howzit.</h1>
      <p class="contact-sub">Helo me make a new friend and reach out. I won't bite</p>

      <div class="channels-grid">

        <a href="mailto:hey@ruben.dev" class="channel-card purple-hover">
          <span class="channel-icon purple-icon">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" style="stroke:var(--c-accent-purple)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <rect x="2.5" y="4.5" width="19" height="15" rx="2.5"/>
              <path d="M3 6 L12 13 L21 6"/>
            </svg>
          </span>
          <div class="channel-label">Email</div>
          <div class="channel-title">hey@ruben.dev</div>
          <div class="channel-desc">Best for anything longer than a message.</div>
        </a>

        <a href="https://www.linkedin.com/in/ruben-de-beer-578b8a20b/" target="_blank" rel="noopener" class="channel-card sky-hover">
          <span class="channel-icon sky-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" style="fill:var(--c-accent-sky)" aria-hidden="true">
              <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.35c0-1.28-.02-2.92-1.78-2.92-1.78 0-2.05 1.39-2.05 2.83V21H9z"/>
            </svg>
          </span>
          <div class="channel-label">LinkedIn</div>
          <div class="channel-title">Ruben de Beer</div>
          <div class="channel-desc">Where I post most of these notes first.</div>
        </a>

        <a href="https://github.com/rubendebeer" target="_blank" rel="noopener" class="channel-card pink-hover">
          <span class="channel-icon pink-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" style="fill:var(--c-accent-pink)" aria-hidden="true">
              <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49l-.01-1.9c-2.78.62-3.37-1.2-3.37-1.2-.45-1.18-1.11-1.5-1.11-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.36-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.05a9.35 9.35 0 0 1 5 0c1.91-1.32 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9l-.01 2.82c0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.25C22 6.58 17.52 2 12 2z"/>
            </svg>
          </span>
          <div class="channel-label">GitHub</div>
          <div class="channel-title">@rubendebeer</div>
          <div class="channel-desc">Code, experiments, and the odd broken thing.</div>
        </a>

      </div>
    </div>
  </section>

  <AppFooter />
</template>

<script setup>
import NavBar from '../components/NavBar.vue'
import AppFooter from '../components/AppFooter.vue'
</script>

<style scoped>
.contact-section {
  background-image: radial-gradient(var(--dot) 1.5px, transparent 1.5px);
  background-size: 26px 26px;
  min-height: calc(100vh - 150px);
}

.contact-inner {
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 20px 48px;
  text-align: center;
}

@media (min-width: 640px) {
  .contact-inner { padding: 60px 40px 70px; }
}

.doodle-wrap {
  display: flex;
  justify-content: center;
  margin-bottom: 8px;
  position: relative;
}

.speech-bubble {
  position: absolute;
  top: 0;
  left: 50%;
  margin-left: 70px;
  transform: rotate(4deg);
  background: var(--surface);
  border: 3px solid var(--ink);
  border-radius: 16px;
  padding: 7px 15px;
  font-family: var(--font-mono);
  font-weight: 600;
  font-size: 16px;
  z-index: 2;
}

.eyebrow {
  font-family: var(--font-body);
  font-weight: 700;
  font-size: 13px;
  letter-spacing: var(--tracking-eyebrow);
  text-transform: uppercase;
  color: var(--c-accent-purple);
  margin-bottom: 14px;
}

.contact-h1 {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: clamp(44px,7vw,72px);
  line-height: 1;
  letter-spacing: -.03em;
  margin: 0 0 18px;
  color: var(--ink);
}

.contact-sub {
  font-size: 20px;
  line-height: 1.55;
  color: var(--ink-2);
  margin: 0 auto 44px;
  max-width: 560px;
}

.channels-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 14px;
  text-align: left;
}

@media (min-width: 640px) {
  .channels-grid { grid-template-columns: repeat(3, 1fr); gap: 22px; }
}

.channel-card {
  text-decoration: none;
  color: inherit;
  background: var(--surface);
  border-radius: 24px;
  border: 1px solid var(--hair);
  box-shadow: 0 10px 30px rgba(19,15,13,.07);
  padding: 28px;
  display: flex;
  flex-direction: column;
  transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease;
}
.channel-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 44px rgba(19,15,13,.14);
}
.purple-hover:hover { border-color: var(--c-accent-purple); }
.sky-hover:hover { border-color: var(--c-accent-sky); }
.pink-hover:hover { border-color: var(--c-accent-pink); }

.channel-icon {
  width: 52px;
  height: 52px;
  border-radius: 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 18px;
}
.purple-icon { background: rgba(184,65,251,.12); border: 2px solid var(--c-accent-purple); }
.sky-icon { background: rgba(90,198,255,.12); border: 2px solid var(--c-accent-sky); }
.pink-icon { background: rgba(249,102,180,.12); border: 2px solid var(--c-accent-pink); }

.channel-label {
  font-family: var(--font-body);
  font-weight: 700;
  font-size: 11px;
  letter-spacing: var(--tracking-eyebrow);
  text-transform: uppercase;
  color: var(--ink-3);
  margin-bottom: 6px;
}

.channel-title {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 22px;
  color: var(--ink);
  margin-bottom: 6px;
}

.channel-desc {
  font-size: 14px;
  color: var(--ink-2);
  line-height: 1.5;
}
</style>
