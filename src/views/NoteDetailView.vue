<template>
  <NavBar />
  <div v-if="note" class="article-wrap">
    <article>
      <RouterLink to="/notes" class="back-link">← All notes</RouterLink>

      <div class="note-meta">
        <span class="pill" :style="pillStyle">Note · {{ note.kind }}</span>
        <span>{{ note.tags[0] }}</span>
        <span>·</span>
        <span>{{ note.date }}</span>
      </div>

      <h1 class="note-h1">{{ note.title }}</h1>
      <svg viewBox="0 0 360 24" width="360" style="display:block;max-width:100%;margin-bottom:24px" aria-hidden="true">
        <path filter="url(#doodle)" d="M6 14 Q100 3 200 13 T354 11" fill="none" style="stroke:var(--c-accent-sky)" stroke-width="5.5" stroke-linecap="round" stroke-dasharray="500" stroke-dashoffset="500">
          <animate attributeName="stroke-dashoffset" from="500" to="0" dur="1.1s" begin="0.3s" fill="freeze"></animate>
        </path>
      </svg>

      <div class="prose" v-html="note.body"></div>

      <div class="article-nav">
        <RouterLink to="/notes" class="nav-link-btn">← All notes</RouterLink>
        <RouterLink v-if="nextNote" :to="`/notes/${nextNote.slug}`" class="nav-link-btn">
          Next: {{ nextNote.title }} →
        </RouterLink>
      </div>
    </article>
  </div>
  <div v-else class="not-found">Note not found.</div>

  <AppFooter />
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import NavBar from '../components/NavBar.vue'
import AppFooter from '../components/AppFooter.vue'
import { notes, getNoteIndex } from '../content/index.js'

const route = useRoute()
const note = computed(() => notes.find(n => n.slug === route.params.slug))

const nextNote = computed(() => {
  const idx = getNoteIndex(route.params.slug)
  return notes[idx + 1] || null
})

const accentColors = {
  sky: 'var(--c-accent-sky)',
  purple: 'var(--c-accent-purple)',
  pink: 'var(--c-accent-pink)',
}

const pillStyle = computed(() => {
  if (!note.value) return ''
  const c = accentColors[note.value.accentColor] || 'var(--c-accent-sky)'
  return `color:${c};border-color:${c}`
})
</script>

<style scoped>
.article-wrap {
  max-width: 760px;
  margin: 0 auto;
  padding: 44px 32px 70px;
}

article { width: 100%; }

.back-link {
  text-decoration: none;
  font-family: var(--font-mono);
  font-size: 14px;
  color: var(--ink-2);
  display: inline-block;
  margin-bottom: 28px;
  transition: color .15s ease;
}
.back-link:hover { color: var(--c-accent-purple); }

.note-meta {
  display: flex;
  gap: 14px;
  align-items: center;
  margin-bottom: 16px;
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

.note-h1 {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: clamp(36px,6vw,52px);
  line-height: 1.04;
  letter-spacing: -.03em;
  margin: 0 0 8px;
  color: var(--ink);
}

.article-nav {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  margin-top: 48px;
  padding-top: 28px;
  border-top: 1px solid var(--hair);
}

.nav-link-btn {
  text-decoration: none;
  font-weight: 700;
  color: var(--c-accent-purple);
  font-size: 15px;
  transition: opacity .15s ease;
}
.nav-link-btn:hover { opacity: .7; }

.not-found {
  padding: 80px 40px;
  text-align: center;
  color: var(--ink-2);
}
</style>
