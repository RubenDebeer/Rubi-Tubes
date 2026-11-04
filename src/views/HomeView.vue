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
          <RouterLink to="/opinions" class="btn-primary">Read My Opinions <span class="btn-arrow">→</span></RouterLink>
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

  <!-- MARQUEE -->
  <div class="marquee-outer" aria-hidden="true">
    <div class="marquee-band">
      <div class="marquee-track">
        <span>NETWORKING ✦ ARCHITECTURE ✦ DEVOPS ✦ DATA ✦ API DESIGN ✦ BACK END ✦ BLA BLA BLA ✦</span>
        <span>NETWORKING ✦ ARCHITECTURE ✦ DEVOPS ✦ DATA ✦ API DESIGN ✦ BACK END ✦ BLA BLA BLA ✦</span>
      </div>
    </div>
  </div>

  <!-- WHAT YOU'LL FIND -->
  <section class="find-section">
    <div class="eyebrow grey">What you'll find here</div>
    <h2 class="find-h2">Two things I can't stop doing.</h2>
    <div class="cards-grid">

      <div class="card-wrap reveal-up stagger-1">
        <RouterLink to="/opinions" class="feature-card feature-card--purple">
          <div class="card-eyebrow">Opinions</div>
          <h3 class="card-h3">Loud takes I actually hold</h3>
          <p class="card-body">Some of my opinions seem good, some are trash. I guess you will need to read them and form your own opinion. ;)</p>
          <span class="card-link">Give it a spec <span class="card-arrow">→</span></span>
        </RouterLink>
      </div>

      <div class="card-wrap reveal-up stagger-2">
        <RouterLink to="/notes" class="feature-card feature-card--pink">
          <div class="card-eyebrow">Notes</div>
          <h3 class="card-h3">Engineering notes long &amp; short</h3>
          <p class="card-body">I have severe ADHD, which means I like a lot of things. Networking, Architecture, DevOps, Data, Api Design, Back en... Bla Bla Bla</p>
          <span class="card-link">Browse notes <span class="card-arrow">→</span></span>
        </RouterLink>
      </div>

      <div class="card-wrap reveal-up stagger-3">
        <RouterLink to="/contact" class="feature-card feature-card--sky">
          <div class="card-eyebrow">Contact</div>
          <h3 class="card-h3">Say howzit</h3>
          <p class="card-body">Hopefully you disagree with some of my opinions, or worse, agree — maybe you just want to have a quick chat? Check my details and let's have a chat.</p>
          <span class="card-link">Get in touch <span class="card-arrow">→</span></span>
        </RouterLink>
      </div>

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
        <span class="recent-arrow">→</span>
      </RouterLink>
    </div>
  </section>

  <AppFooter />
</template>

<script setup>
import { onMounted } from 'vue'
import NavBar from '../components/NavBar.vue'
import AppFooter from '../components/AppFooter.vue'

const recentItems = [
  {
    href: '/notes/how-dns-resolution-works',
    slug: 'how-dns-resolution-works',
    label: 'Note · Cheat sheet',
    title: 'How DNS resolution works',
    date: 'Jun 2026',
    pillStyle: 'background:var(--tint-pink);color:var(--text-pink);border-color:var(--ink)',
  },
  {
    href: '/notes/kubernetes-architecture-from-scratch',
    slug: 'kubernetes-architecture-from-scratch',
    label: 'Note · Long read',
    title: 'Kubernetes architecture, from scratch',
    date: 'May 2026',
    pillStyle: 'background:var(--tint-sky);color:var(--text-sky);border-color:var(--ink)',
  },
  {
    href: '/opinions/the-inferiority-complex-as-a-developer',
    slug: 'the-inferiority-complex-as-a-developer',
    label: 'Opinion',
    title: 'The inferiority complex as a developer',
    date: 'Apr 2026',
    pillStyle: 'background:var(--tint-purple);color:var(--text-purple);border-color:var(--ink)',
  },
]

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  const observer = new IntersectionObserver(
    (entries) => entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible')
        observer.unobserve(e.target)
      }
    }),
    { threshold: 0.08 }
  )
  document.querySelectorAll('.reveal-up').forEach(el => observer.observe(el))
})
</script>

<style scoped>
/* HERO */
.hero-section {
  position: relative;
  overflow: hidden;
  background-image: radial-gradient(var(--dot) 1.2px, transparent 1.2px);
  background-size: 22px 22px;
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
  font-family: var(--font-mono);
  font-weight: 600;
  font-size: 13px;
  letter-spacing: var(--tracking-eyebrow);
  text-transform: uppercase;
  margin-bottom: 20px;
}
.eyebrow.purple { color: var(--c-accent-purple); }
.eyebrow.grey   { color: var(--ink-3); margin-bottom: 8px; }

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

/* Buttons — hard shadow + lift/press */
.btn-primary {
  text-decoration: none;
  font-weight: 700;
  font-size: 16px;
  border-radius: 14px;
  padding: 14px 26px;
  background: var(--purple);
  color: #fff;
  border: var(--border-thin) solid var(--ink);
  box-shadow: var(--shadow-hard-sm);
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 44px;
  transition: transform .15s ease, box-shadow .15s ease;
}
.btn-primary:hover  { transform: translate(-2px,-2px); box-shadow: 6px 6px 0 var(--ink); }
.btn-primary:active { transform: translate(3px,3px);   box-shadow: 1px 1px 0 var(--ink); }

.btn-secondary {
  text-decoration: none;
  font-weight: 700;
  font-size: 16px;
  border-radius: 14px;
  padding: 14px 26px;
  background: var(--surface);
  color: var(--ink);
  border: var(--border-thin) solid var(--ink);
  box-shadow: var(--shadow-hard-sm);
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  transition: transform .15s ease, box-shadow .15s ease;
}
.btn-secondary:hover  { transform: translate(-2px,-2px); box-shadow: 6px 6px 0 var(--ink); }
.btn-secondary:active { transform: translate(3px,3px);   box-shadow: 1px 1px 0 var(--ink); }

.btn-arrow {
  display: inline-block;
  transition: transform .2s ease;
}
.btn-primary:hover .btn-arrow { transform: translateX(4px); }

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
  border: var(--border-thick) solid var(--ink);
  border-radius: 16px;
  padding: 7px 15px;
  font-family: var(--font-mono);
  font-weight: 600;
  font-size: 16px;
  box-shadow: var(--shadow-hard-sm);
}

/* MARQUEE */
.marquee-outer {
  overflow: hidden;
  margin: 28px 0;
}

.marquee-band {
  overflow: hidden;
  background: var(--purple);
  border-top: var(--border-thick) solid var(--ink);
  border-bottom: var(--border-thick) solid var(--ink);
  padding: 14px 0;
  transform: rotate(var(--tilt-left));
  margin-left: -20px;
  margin-right: -20px;
}

.marquee-track {
  display: flex;
  width: max-content;
  gap: 40px;
  white-space: nowrap;
  font-family: var(--font-display);
  font-size: 24px;
  font-weight: 800;
  color: #fff;
  animation: marquee-scroll 26s linear infinite;
}

/* WHAT YOU'LL FIND */
.find-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px 20px;
}

@media (min-width: 640px) {
  .find-section { padding: 60px 40px 20px; }
}

.find-h2 {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: clamp(28px, 5vw, 38px);
  letter-spacing: -.02em;
  margin: 0 0 36px;
  color: var(--ink);
}

.cards-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}

@media (min-width: 640px) {
  .cards-grid { grid-template-columns: repeat(2, 1fr); gap: 28px; }
}

@media (min-width: 900px) {
  .cards-grid { grid-template-columns: repeat(3, 1fr); gap: 32px; }
}

/* Wrapper handles the scroll-reveal; card handles the tilt */
.card-wrap {
  display: flex;
  flex-direction: column;
}

.feature-card {
  flex: 1;
  text-decoration: none;
  color: var(--ink);
  border: var(--border-thin) solid var(--ink);
  border-radius: 22px;
  box-shadow: var(--shadow-hard-md);
  padding: 28px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: transform .25s cubic-bezier(.3,1.5,.5,1), box-shadow .25s ease;
}

.feature-card--purple { background: var(--tint-purple); transform: rotate(var(--tilt-left)); }
.feature-card--pink   { background: var(--tint-pink);   transform: rotate(var(--tilt-right)); }
.feature-card--sky    { background: var(--tint-sky);    transform: rotate(var(--tilt-slight)); }

.feature-card:hover {
  transform: rotate(0) translateY(-8px) !important;
  box-shadow: 10px 14px 0 var(--ink);
}

.card-eyebrow {
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: .18em;
  text-transform: uppercase;
}
.feature-card--purple .card-eyebrow { color: var(--text-purple); }
.feature-card--pink   .card-eyebrow { color: var(--text-pink); }
.feature-card--sky    .card-eyebrow { color: var(--text-sky); }

.card-h3 {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 24px;
  line-height: 1.1;
  margin: 0;
  color: var(--ink);
}

.card-body {
  font-size: 15px;
  line-height: 1.5;
  color: var(--ink-2);
  margin: 0;
  flex: 1;
}

.card-link {
  margin-top: auto;
  font-weight: 700;
  color: var(--ink);
  font-size: 15px;
  display: flex;
  align-items: center;
  gap: 4px;
}

.card-arrow {
  display: inline-block;
  transition: transform .2s ease;
}
.feature-card:hover .card-arrow { transform: translateX(6px); }

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
  border-top: var(--border-thin) solid var(--ink);
}

.recent-row {
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 18px 8px;
  border-bottom: var(--border-thin) solid var(--ink);
  transition: background .2s ease, padding-left .2s ease;
  flex-wrap: wrap;
}
.recent-row:hover {
  background: var(--surface);
  padding-left: 20px;
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
  border: var(--border-thin) solid;
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

.recent-arrow {
  flex: none;
  font-size: 20px;
  opacity: 0;
  transform: translateX(-4px);
  transition: opacity .15s ease, transform .15s ease;
}
.recent-row:hover .recent-arrow {
  opacity: 1;
  transform: translateX(0);
}
</style>
