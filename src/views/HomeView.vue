<template>
  <NavBar />

  <!-- HERO -->
  <section class="hero-section">
    <div class="hero-inner">
      <!-- Left column -->
      <div class="hero-text">
        <div class="eyebrow purple">Notes &amp; opinions</div>
        <h1 class="hero-h1">Hi, I'm Ruben.</h1>
        <svg viewBox="0 0 400 26" width="400" style="display:block;max-width:100%;margin-top:4px" aria-hidden="true">
          <path filter="url(#doodle)" d="M6 15 Q110 3 210 14 T394 11" fill="none" style="stroke:var(--c-accent-purple)" stroke-width="6" stroke-linecap="round" stroke-dasharray="540" stroke-dashoffset="540">
            <animate attributeName="stroke-dashoffset" from="540" to="0" dur="1.1s" begin="0.4s" fill="freeze"></animate>
          </path>
        </svg>
        <p class="hero-sub">I'm a software engineer. I break things, try to fix them, then write some of it down. Have a look at my notes, or don't. I'm not your boss...</p>
        <div class="hero-btns">
          <RouterLink to="/opinions" class="btn-primary">Read My Opinions →</RouterLink>
          <RouterLink to="/notes" class="btn-secondary">Browse Tech notes</RouterLink>
        </div>
      </div>

      <!-- Right: mascot -->
      <div class="mascot-wrap" data-mascot>
        <div class="speech-bubble" style="animation:bobc 3.6s ease-in-out infinite">Oh Hi.</div>
        <!-- lightbulb doodle -->
        <svg viewBox="0 0 70 90" width="66" style="position:absolute;left:8px;bottom:150px;z-index:4;animation:bobc 5s ease-in-out infinite" aria-hidden="true">
          <g filter="url(#doodle)" fill="none" style="stroke:var(--ink)" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="35" cy="34" r="20" style="fill:var(--surface)"></circle>
            <path d="M27 52 L43 52 M29 60 L41 60"></path>
            <g style="stroke:var(--c-accent-sky)" stroke-width="3">
              <path d="M35 6 L35 0"></path>
              <path d="M58 20 L64 15"></path>
              <path d="M12 20 L6 15"></path>
              <animate attributeName="opacity" values="1;.25;1" dur="2s" calcMode="spline" keyTimes="0;0.5;1" keySplines=".37 0 .63 1;.37 0 .63 1" repeatCount="indefinite"></animate>
            </g>
          </g>
        </svg>
        <!-- main stick figure -->
        <div style="position:absolute;right:0;bottom:0;z-index:5;animation:bobc 5.5s ease-in-out infinite">
          <svg viewBox="0 0 170 250" width="330" style="overflow:visible;display:block" aria-hidden="true">
            <path filter="url(#doodle)" d="M6 244 Q85 250 168 240" fill="none" style="stroke:var(--ink)" stroke-width="3.5" stroke-linecap="round"></path>
            <g filter="url(#doodle)" fill="none" style="stroke:var(--ink)" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="82" cy="48" r="27" style="fill:var(--surface)"></circle>
              <circle cx="72" cy="46" r="2.6" style="fill:var(--ink)" stroke="none"></circle>
              <circle cx="92" cy="46" r="2.6" style="fill:var(--ink)" stroke="none"></circle>
              <path d="M70 58 Q82 68 94 58"></path>
              <path d="M82 75 L82 162"></path>
              <path d="M82 162 L56 226"></path>
              <path d="M82 162 L108 226"></path>
              <path d="M82 100 L52 136"></path>
              <g>
                <path d="M82 94 L124 60"></path>
                <circle cx="126" cy="57" r="5" style="fill:var(--surface)"></circle>
                <animateTransform attributeName="transform" type="rotate" values="-3 82 94; -24 82 94; -3 82 94" dur="1.8s" calcMode="spline" keyTimes="0;0.5;1" keySplines=".37 0 .63 1;.37 0 .63 1" repeatCount="indefinite"></animateTransform>
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  </section>

  <!-- WHAT YOU'LL FIND -->
  <section class="find-section">
    <div class="eyebrow grey">What you'll find here</div>
    <h2 class="find-h2">Two things I can't stop doing.</h2>
    <div class="cards-grid">

      <RouterLink to="/opinions" class="feature-card">
        <div class="card-doodle-area">
          <svg viewBox="0 0 150 190" width="118" style="overflow:visible" aria-hidden="true">
            <g filter="url(#doodle)" fill="none" style="stroke:var(--ink)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="66" cy="52" r="20" style="fill:var(--surface)"></circle>
              <circle cx="58" cy="50" r="2.2" style="fill:var(--ink)" stroke="none"></circle>
              <circle cx="74" cy="50" r="2.2" style="fill:var(--ink)" stroke="none"></circle>
              <path d="M56 62 Q66 70 76 62"></path>
              <path d="M66 72 L66 132"></path>
              <path d="M66 132 L48 180"></path>
              <path d="M66 132 L84 180"></path>
              <path d="M66 94 L44 120"></path>
              <path d="M66 90 L98 62"></path>
              <circle cx="106" cy="52" r="12" style="fill:var(--surface)"></circle>
              <path d="M100 63 L112 63"></path>
              <g style="stroke:var(--c-accent-purple)" stroke-width="3">
                <path d="M106 30 L106 22"></path>
                <path d="M128 44 L135 39"></path>
                <path d="M84 44 L77 39"></path>
                <animate attributeName="opacity" values="1;.25;1" dur="2s" calcMode="spline" keyTimes="0;0.5;1" keySplines=".37 0 .63 1;.37 0 .63 1" repeatCount="indefinite"></animate>
              </g>
            </g>
          </svg>
        </div>
        <div class="card-eyebrow purple">Opinions</div>
        <h3 class="card-h3">Loud takes I actually hold</h3>
        <p class="card-body">Some of my opinions seem good, some are trash. I guess you will need to read them and form your own opinion. ;)</p>
        <span class="card-link">Give it a spec →</span>
      </RouterLink>

      <RouterLink to="/notes" class="feature-card">
        <div class="card-doodle-area">
          <svg viewBox="0 0 150 190" width="118" style="overflow:visible" aria-hidden="true">
            <g filter="url(#doodle)" fill="none" style="stroke:var(--ink)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="58" cy="50" r="19" style="fill:var(--surface)"></circle>
              <circle cx="50" cy="48" r="2.2" style="fill:var(--ink)" stroke="none"></circle>
              <circle cx="66" cy="48" r="2.2" style="fill:var(--ink)" stroke="none"></circle>
              <path d="M49 60 Q58 67 67 60"></path>
              <path d="M58 69 L58 128"></path>
              <path d="M58 128 L42 176"></path>
              <path d="M58 128 L74 176"></path>
              <path d="M58 88 L40 112"></path>
              <rect x="84" y="96" width="46" height="54" rx="6" style="fill:var(--surface)"></rect>
              <g style="stroke:var(--c-accent-sky)" stroke-width="3">
                <path d="M92 110 L122 110"></path>
                <path d="M92 124 L118 124"></path>
                <path d="M92 138 L112 138"></path>
              </g>
              <g>
                <path d="M58 86 L96 116"></path>
                <path d="M96 116 L110 108" style="stroke:var(--c-accent-pink)"></path>
                <animateTransform attributeName="transform" type="translate" values="0 0; 2 2.5; 0 0; -2 1.5; 0 0" dur="2.2s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" keySplines=".45 0 .55 1;.45 0 .55 1;.45 0 .55 1;.45 0 .55 1" repeatCount="indefinite"></animateTransform>
              </g>
            </g>
          </svg>
        </div>
        <div class="card-eyebrow purple">Notes</div>
        <h3 class="card-h3">Engineering notes long &amp; short</h3>
        <p class="card-body">I have severe ADHD, which means I like a lot of things. Networking, Architecture, DevOps, Data, Api Design, Back en... Bla Bla Bla</p>
        <span class="card-link">Browse notes →</span>
      </RouterLink>

      <RouterLink to="/contact" class="feature-card">
        <div class="card-doodle-area">
          <svg viewBox="0 0 150 190" width="118" style="overflow:visible" aria-hidden="true">
            <g filter="url(#doodle)" fill="none" style="stroke:var(--ink)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="68" cy="50" r="20" style="fill:var(--surface)"></circle>
              <circle cx="60" cy="48" r="2.2" style="fill:var(--ink)" stroke="none"></circle>
              <circle cx="76" cy="48" r="2.2" style="fill:var(--ink)" stroke="none"></circle>
              <path d="M58 60 Q68 68 78 60"></path>
              <path d="M68 70 L68 130"></path>
              <path d="M68 130 L50 178"></path>
              <path d="M68 130 L86 178"></path>
              <path d="M68 92 L46 118"></path>
              <g>
                <path d="M68 88 L102 58"></path>
                <circle cx="104" cy="55" r="4.5" style="fill:var(--surface)"></circle>
                <animateTransform attributeName="transform" type="rotate" values="-3 68 88; -22 68 88; -3 68 88" dur="1.8s" calcMode="spline" keyTimes="0;0.5;1" keySplines=".37 0 .63 1;.37 0 .63 1" repeatCount="indefinite"></animateTransform>
              </g>
            </g>
          </svg>
        </div>
        <div class="card-eyebrow purple">Contact</div>
        <h3 class="card-h3">Say howzit</h3>
        <p class="card-body">Hopefully you disagree with some of my opinions, or worse, agree — maybe you just want to have a quick chat? Check my details and let's have a chat.</p>
        <span class="card-link">Get in touch →</span>
      </RouterLink>

    </div>
  </section>

  <!-- RECENTLY -->
  <section class="recent-section">
    <div class="recent-header">
      <h2 class="recent-h2">Recently</h2>
      <RouterLink to="/notes" class="see-all">See all →</RouterLink>
    </div>
    <div class="recent-list">
      <RouterLink
        v-for="item in recentItems"
        :key="item.slug"
        :to="item.href"
        class="recent-row"
      >
        <span class="pill" :style="item.pillStyle">{{ item.label }}</span>
        <span class="recent-title">{{ item.title }}</span>
        <span class="recent-date">{{ item.date }}</span>
      </RouterLink>
    </div>
  </section>

  <AppFooter />
</template>

<script setup>
import NavBar from '../components/NavBar.vue'
import AppFooter from '../components/AppFooter.vue'

const recentItems = [
  {
    href: '/notes/how-dns-resolution-works',
    slug: 'how-dns-resolution-works',
    label: 'Note · Cheat sheet',
    title: 'How DNS resolution works',
    date: 'Jun 2026',
    pillStyle: 'color:var(--c-accent-sky);border-color:var(--c-accent-sky)',
  },
  {
    href: '/notes/kubernetes-architecture-from-scratch',
    slug: 'kubernetes-architecture-from-scratch',
    label: 'Note · Long read',
    title: 'Kubernetes architecture, from scratch',
    date: 'May 2026',
    pillStyle: 'color:var(--c-accent-sky);border-color:var(--c-accent-sky)',
  },
  {
    href: '/opinions/the-inferiority-complex-as-a-developer',
    slug: 'the-inferiority-complex-as-a-developer',
    label: 'Opinion',
    title: 'The inferiority complex as a developer',
    date: 'Apr 2026',
    pillStyle: 'color:var(--c-accent-purple);border-color:var(--c-accent-purple)',
  },
]
</script>

<style scoped>
/* HERO */
.hero-section {
  position: relative;
  overflow: hidden;
  background-image: radial-gradient(var(--dot) 1.5px, transparent 1.5px);
  background-size: 26px 26px;
}

.hero-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  min-height: 600px;
  padding: 40px 40px 60px;
  gap: 20px;
}

@media (max-width: 767px) {
  .hero-inner {
    flex-direction: column;
    align-items: flex-start;
    min-height: unset;
    padding: 32px 20px 40px;
  }
}

.hero-text {
  flex: 1;
  max-width: 620px;
}

.eyebrow {
  font-family: var(--font-body);
  font-weight: 700;
  font-size: 13px;
  letter-spacing: var(--tracking-eyebrow);
  text-transform: uppercase;
  margin-bottom: 20px;
}
.eyebrow.purple { color: var(--c-accent-purple); }
.eyebrow.grey { color: var(--ink-3); margin-bottom: 8px; }

.hero-h1 {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: clamp(52px,7vw,82px);
  line-height: 1;
  letter-spacing: -.03em;
  margin: 0;
  color: var(--ink);
}

.hero-sub {
  font-size: 20px;
  line-height: 1.55;
  color: var(--ink-2);
  margin: 26px 0 36px;
  max-width: 520px;
}

.hero-btns {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.btn-primary {
  text-decoration: none;
  font-weight: 700;
  font-size: 16px;
  border-radius: 999px;
  padding: 15px 28px;
  background: var(--c-accent-purple);
  color: #fff;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: transform .18s ease, box-shadow .18s ease;
}
.btn-primary:hover { transform: translateY(-3px); box-shadow: 0 8px 20px rgba(184,65,251,.3); }

.btn-secondary {
  text-decoration: none;
  font-weight: 700;
  font-size: 16px;
  border-radius: 999px;
  padding: 15px 28px;
  background: var(--surface);
  color: var(--ink);
  border: 3px solid var(--ink);
  transition: transform .18s ease;
}
.btn-secondary:hover { transform: translateY(-3px); }

/* MASCOT */
.mascot-wrap {
  flex: none;
  position: relative;
  width: 380px;
  height: 520px;
  align-self: flex-end;
}

@media (max-width: 767px) {
  .mascot-wrap { display: none; }
}

.speech-bubble {
  position: absolute;
  right: 8px;
  top: 52px;
  z-index: 6;
  transform: rotate(4deg);
  background: var(--surface);
  border: 3px solid var(--ink);
  border-radius: 16px;
  padding: 7px 15px;
  font-family: var(--font-mono);
  font-weight: 600;
  font-size: 16px;
}

/* WHAT YOU'LL FIND */
.find-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px 20px;
}

@media (min-width: 640px) {
  .find-section { padding: 40px 40px 20px; }
}

.find-h2 {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: clamp(28px, 5vw, 38px);
  letter-spacing: -.02em;
  margin: 0 0 28px;
  color: var(--ink);
}

.cards-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}

@media (min-width: 640px) {
  .cards-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
}

@media (min-width: 900px) {
  .cards-grid { grid-template-columns: repeat(3, 1fr); gap: 24px; }
}

.feature-card {
  text-decoration: none;
  color: inherit;
  background: var(--surface);
  border-radius: 26px;
  border: 1px solid var(--hair);
  box-shadow: 0 10px 30px rgba(19,15,13,.07);
  padding: 26px;
  display: flex;
  flex-direction: column;
  transition: transform .2s ease, box-shadow .2s ease;
}
.feature-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 44px rgba(19,15,13,.14);
}

.card-doodle-area {
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-eyebrow {
  font-family: var(--font-body);
  font-weight: 700;
  font-size: 12px;
  letter-spacing: var(--tracking-eyebrow);
  text-transform: uppercase;
  margin-bottom: 8px;
}
.card-eyebrow.purple { color: var(--c-accent-purple); }

.card-h3 {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 24px;
  margin: 0 0 8px;
  color: var(--ink);
}

.card-body {
  font-size: 15px;
  line-height: 1.5;
  color: var(--ink-2);
  margin: 0 0 14px;
}

.card-link {
  margin-top: auto;
  font-weight: 700;
  color: var(--c-accent-purple);
  font-size: 15px;
}

/* RECENTLY */
.recent-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 20px 48px;
}

@media (min-width: 640px) {
  .recent-section { padding: 44px 40px 60px; }
}

.recent-header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 20px;
}

.recent-h2 {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 30px;
  letter-spacing: -.02em;
  margin: 0;
  color: var(--ink);
}

.see-all {
  text-decoration: none;
  font-weight: 700;
  color: var(--c-accent-purple);
  font-size: 15px;
}

.recent-list {
  display: flex;
  flex-direction: column;
  border-top: 1px solid var(--hair);
}

.recent-row {
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 6px;
  border-bottom: 1px solid var(--hair);
  transition: background .15s ease, padding-left .15s ease;
  flex-wrap: wrap;
}
.recent-row:hover {
  background: rgba(184,65,251,.05);
  padding-left: 16px;
}

@media (max-width: 639px) {
  .recent-date { display: none; }
}

.pill {
  flex: none;
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: .1em;
  border: 1.5px solid;
  border-radius: 999px;
  padding: 4px 11px;
}

.recent-title {
  flex: 1;
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 20px;
  color: var(--ink);
}

.recent-date {
  flex: none;
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--ink-3);
}
</style>
