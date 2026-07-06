<template>
  <NavBar />

  <!-- HEADER -->
  <section class="hero-section">
    <div class="hero-inner">
      <div class="hero-text">
        <div class="eyebrow">Opinions</div>
        <h1 class="hero-h1">Loud takes I actually hold.</h1>
        <svg viewBox="0 0 320 24" width="320" style="display:block;max-width:100%" aria-hidden="true">
          <path filter="url(#doodle)" d="M6 14 Q90 4 170 13 T314 11" fill="none" style="stroke:var(--c-accent-pink)" stroke-width="5.5" stroke-linecap="round" stroke-dasharray="440" stroke-dashoffset="440">
            <animate attributeName="stroke-dashoffset" from="440" to="0" dur="1s" begin="0.3s" fill="freeze"></animate>
          </path>
        </svg>
        <p class="hero-sub">"Men are disturbed not by things, but by the views which they take of things." Fight for your opinion, but don't believe it contains the whole truth — or the only truth. Bonus points if you know who said that.</p>
      </div>
      <svg viewBox="0 0 150 190" width="300" style="flex:none;overflow:visible;animation:bobc 5s ease-in-out infinite" aria-hidden="true">
        <g filter="url(#doodle)" fill="none" style="stroke:var(--ink)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="66" cy="52" r="20" style="fill:var(--surface)"/>
          <circle cx="58" cy="50" r="2.2" style="fill:var(--ink)" stroke="none"/>
          <circle cx="74" cy="50" r="2.2" style="fill:var(--ink)" stroke="none"/>
          <path d="M56 62 Q66 70 76 62"/>
          <path d="M66 72 L66 132"/>
          <path d="M66 132 L48 180"/>
          <path d="M66 132 L84 180"/>
          <path d="M66 94 L44 120"/>
          <path d="M66 90 L98 62"/>
          <circle cx="106" cy="52" r="12" style="fill:var(--surface)"/>
          <path d="M100 63 L112 63"/>
          <g style="stroke:var(--c-accent-purple)" stroke-width="3">
            <path d="M106 30 L106 22"/>
            <path d="M128 44 L135 39"/>
            <path d="M84 44 L77 39"/>
            <animate attributeName="opacity" values="1;.25;1" dur="2s" calcMode="spline" keyTimes="0;0.5;1" keySplines=".37 0 .63 1;.37 0 .63 1" repeatCount="indefinite"/>
          </g>
        </g>
      </svg>
    </div>
  </section>

  <!-- POST LIST -->
  <section class="post-list">
    <RouterLink
      v-for="post in opinions"
      :key="post.slug"
      :to="`/opinions/${post.slug}`"
      class="post-card"
    >
      <div class="post-card-inner">
        <div class="post-meta">
          <span class="pill" :style="pillStyle(post)">{{ post.tags[0] }}</span>
          <span>{{ post.date }}</span>
          <span>·</span>
          <span>{{ post.readTime }}</span>
        </div>
        <h2 class="post-title">{{ post.title }}</h2>
        <p class="post-excerpt" v-html="post.excerpt"></p>
      </div>
      <span class="read-link">Read →</span>
    </RouterLink>

    <div class="brewing">More opinions brewing — check back soon.</div>
  </section>

  <AppFooter />
</template>

<script setup>
import NavBar from '../components/NavBar.vue'
import AppFooter from '../components/AppFooter.vue'
import { opinions } from '../content/index.js'

const tagColors = {
  purple: 'var(--c-accent-purple)',
  pink: 'var(--c-accent-pink)',
  sky: 'var(--c-accent-sky)',
}

function pillStyle(post) {
  const c = tagColors[post.tagColor] || 'var(--c-accent-purple)'
  return `color:${c};border-color:${c}`
}
</script>

<style scoped>
.hero-section {
  background-image: radial-gradient(var(--dot) 1.5px, transparent 1.5px);
  background-size: 26px 26px;
}

.hero-inner {
  max-width: 1080px;
  margin: 0 auto;
  padding: 36px 20px 24px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 40px;
}

@media (min-width: 640px) {
  .hero-inner { padding: 56px 40px 30px; }
}

@media (max-width: 767px) {
  .hero-inner { flex-direction: column; }
  .hero-inner > svg { display: none; }
}

.hero-text { max-width: 540px; }

.eyebrow {
  font-family: var(--font-body);
  font-weight: 700;
  font-size: 13px;
  letter-spacing: var(--tracking-eyebrow);
  text-transform: uppercase;
  color: var(--c-accent-purple);
  margin-bottom: 16px;
}

.hero-h1 {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: clamp(40px,6vw,64px);
  line-height: 1.02;
  letter-spacing: -.03em;
  margin: 0 0 6px;
  color: var(--ink);
}

.hero-sub {
  font-size: 19px;
  line-height: 1.55;
  color: var(--ink-2);
  margin: 22px 0 0;
  max-width: 560px;
}

.post-list {
  max-width: 1080px;
  margin: 0 auto;
  padding: 16px 20px 48px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

@media (min-width: 640px) {
  .post-list { padding: 24px 40px 60px; gap: 22px; }
}

.post-card {
  text-decoration: none;
  color: inherit;
  background: var(--surface);
  border-radius: 20px;
  border: 1px solid var(--hair);
  box-shadow: 0 10px 30px rgba(19,15,13,.07);
  padding: 22px 20px;
  display: flex;
  gap: 26px;
  align-items: flex-start;
  transition: transform .2s ease, box-shadow .2s ease;
}

@media (min-width: 640px) {
  .post-card { border-radius: 26px; padding: 30px 32px; }
}
.post-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 44px rgba(19,15,13,.14);
}

.post-card-inner { flex: 1; }

.post-meta {
  display: flex;
  gap: 14px;
  align-items: center;
  margin-bottom: 12px;
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--ink-3);
}

.pill {
  font-family: var(--font-mono);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: .1em;
  font-size: 11px;
  border: 1.5px solid;
  border-radius: 999px;
  padding: 3px 10px;
}

.post-title {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: clamp(22px, 4vw, 30px);
  letter-spacing: -.02em;
  margin: 0 0 10px;
  color: var(--ink);
}

.post-excerpt {
  font-size: 16px;
  line-height: 1.6;
  color: var(--ink-2);
  margin: 0;
}

.read-link {
  flex: none;
  font-weight: 700;
  color: var(--c-accent-purple);
  font-size: 15px;
  align-self: center;
}

.brewing {
  text-align: center;
  padding: 20px 0;
  font-family: var(--font-mono);
  font-size: 14px;
  color: var(--ink-3);
}
</style>
