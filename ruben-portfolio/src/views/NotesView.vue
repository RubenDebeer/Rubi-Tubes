<template>
  <NavBar />

  <!-- HEADER -->
  <section class="hero-section">
    <div class="hero-inner">
      <div class="hero-text">
        <div class="eyebrow">Notes</div>
        <h1 class="hero-h1">Field notes I keep<br>coming back to.</h1>
        <svg viewBox="0 0 300 24" width="300" style="display:block;max-width:100%" aria-hidden="true">
          <path filter="url(#doodle)" d="M6 14 Q80 4 160 13 T294 11" fill="none" style="stroke:var(--c-accent-sky)" stroke-width="5.5" stroke-linecap="round" stroke-dasharray="420" stroke-dashoffset="420">
            <animate attributeName="stroke-dashoffset" from="420" to="0" dur="1s" begin="0.3s" fill="freeze"></animate>
          </path>
        </svg>
        <p class="hero-sub">My working memory, in public. Some are long walkthroughs, some are two-line reminders. All of them are things I've actually needed.</p>
      </div>
      <svg viewBox="0 0 150 190" width="300" style="flex:none;overflow:visible;animation:bobc 5s ease-in-out infinite" aria-hidden="true">
        <g filter="url(#doodle)" fill="none" style="stroke:var(--ink)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="58" cy="50" r="19" style="fill:var(--surface)"/>
          <circle cx="50" cy="48" r="2.2" style="fill:var(--ink)" stroke="none"/>
          <circle cx="66" cy="48" r="2.2" style="fill:var(--ink)" stroke="none"/>
          <path d="M49 60 Q58 67 67 60"/>
          <path d="M58 69 L58 128"/>
          <path d="M58 128 L42 176"/>
          <path d="M58 128 L74 176"/>
          <path d="M58 88 L40 112"/>
          <rect x="84" y="96" width="46" height="54" rx="6" style="fill:var(--surface)"/>
          <g style="stroke:var(--c-accent-sky)" stroke-width="3">
            <path d="M92 110 L122 110"/>
            <path d="M92 124 L118 124"/>
            <path d="M92 138 L112 138"/>
          </g>
          <g>
            <path d="M58 86 L96 116"/>
            <path d="M96 116 L110 108" style="stroke:var(--c-accent-pink)"/>
            <animateTransform attributeName="transform" type="translate" values="0 0; 2 2.5; 0 0; -2 1.5; 0 0" dur="2.2s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" keySplines=".45 0 .55 1;.45 0 .55 1;.45 0 .55 1;.45 0 .55 1" repeatCount="indefinite"/>
          </g>
        </g>
      </svg>
    </div>
  </section>

  <!-- SEARCH -->
  <section class="search-section">
    <div class="search-wrap">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9a968f" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" class="search-icon" aria-hidden="true">
        <circle cx="11" cy="11" r="7"/>
        <path d="M21 21l-4.3-4.3"/>
      </svg>
      <input
        v-model="query"
        type="text"
        placeholder="Search notes by #hashtag — try #ci-cd"
        spellcheck="false"
        class="search-input"
        aria-label="Search notes by hashtag"
      />
      <button v-if="query" @click="query = ''" class="clear-btn" aria-label="Clear search">×</button>
    </div>
  </section>

  <!-- FILTER CHIPS -->
  <section class="chips-section">
    <button
      v-for="chip in chips"
      :key="chip.q"
      @click="query = chip.q"
      :class="['chip', { active: norm(chip.q) === norm(query) }]"
    >{{ chip.label }}</button>
  </section>

  <!-- NOTE GRID -->
  <section class="notes-section">
    <template v-if="filteredNotes.length > 0">
      <div class="notes-grid">
        <RouterLink
          v-for="note in filteredNotes"
          :key="note.slug"
          :to="`/notes/${note.slug}`"
          class="note-card"
        >
          <div class="note-card-top">
            <span class="pill" :style="notePillStyle(note)">{{ note.kind }}</span>
            <span class="note-date">{{ note.date }}</span>
          </div>
          <h3 class="note-title">{{ note.title }}</h3>
          <p class="note-excerpt">{{ note.excerpt }}</p>
          <div class="note-tags">
            <button
              v-for="tag in note.tags"
              :key="tag"
              @click.prevent="query = tag"
              class="tag-pill"
            >#{{ tag }}</button>
          </div>
        </RouterLink>
      </div>
      <div class="result-msg">{{ resultMsg }}</div>
    </template>

    <!-- empty state -->
    <div v-else class="empty-state">
      <svg viewBox="0 0 120 120" width="110" style="overflow:visible;animation:bobc 5s ease-in-out infinite" aria-hidden="true">
        <g filter="url(#doodle)" fill="none" style="stroke:var(--ink)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="52" cy="52" r="26" style="fill:var(--surface)"/>
          <circle cx="44" cy="50" r="2.4" style="fill:var(--ink)" stroke="none"/>
          <circle cx="60" cy="50" r="2.4" style="fill:var(--ink)" stroke="none"/>
          <path d="M44 66 Q52 60 60 66"/>
          <path d="M71 71 L92 92"/>
        </g>
      </svg>
      <div class="empty-msg">No notes match "{{ query }}" yet. Try #networking, #ci-cd or #kubernetes.</div>
      <button @click="query = ''" class="clear-search-btn">Clear search</button>
    </div>
  </section>

  <AppFooter />
</template>

<script setup>
import { ref, computed } from 'vue'
import NavBar from '../components/NavBar.vue'
import AppFooter from '../components/AppFooter.vue'
import { notes } from '../content/index.js'

const query = ref('')

function norm(s) {
  return (s || '').toLowerCase().replace(/[^a-z0-9]/g, '')
}

const filteredNotes = computed(() => {
  const nq = norm(query.value)
  if (!nq) return notes
  return notes.filter(n =>
    norm(n.title).includes(nq) || n.tags.some(t => norm(t).includes(nq))
  )
})

const resultMsg = computed(() => {
  const q = query.value
  if (!q) return "That's everything so far — more notes land as I take them."
  const count = filteredNotes.value.length
  return `${count} note${count === 1 ? '' : 's'} tagged near "${q}"`
})

const topicList = ['Storage', 'Data', 'Networking', 'Microservices', 'CI/CD', 'Scaling', 'Big Data', 'Architecture']
const chips = [{ label: 'All', q: '' }, ...topicList.map(t => ({ label: t, q: t }))]

const accentColors = {
  sky: 'var(--c-accent-sky)',
  purple: 'var(--c-accent-purple)',
  pink: 'var(--c-accent-pink)',
}

function notePillStyle(note) {
  const c = accentColors[note.accentColor] || 'var(--c-accent-sky)'
  return `color:${c};border-color:${c}`
}
</script>

<style scoped>
.hero-section {
  background-image: radial-gradient(var(--dot) 1.5px, transparent 1.5px);
  background-size: 26px 26px;
}

.hero-inner {
  max-width: 1140px;
  margin: 0 auto;
  padding: 56px 40px 30px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 40px;
}

.hero-text { max-width: 560px; }

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
}

/* SEARCH */
.search-section {
  max-width: 1140px;
  margin: 0 auto;
  padding: 14px 40px 0;
}

.search-wrap {
  position: relative;
  max-width: 540px;
}

.search-icon {
  position: absolute;
  left: 18px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}

.search-input {
  width: 100%;
  box-sizing: border-box;
  font-family: var(--font-mono);
  font-size: 15px;
  color: var(--ink);
  background: var(--surface);
  border: 2px solid var(--ink);
  border-radius: 999px;
  padding: 13px 46px 13px 46px;
  outline: none;
  box-shadow: 3px 3px 0 var(--hair);
  transition: border-color .15s ease;
}
.search-input:focus { border-color: var(--c-accent-purple); }
.search-input::placeholder { color: var(--ink-3); }

.clear-btn {
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 0;
  background: rgba(19,15,13,.07);
  color: var(--ink);
  font-size: 18px;
  line-height: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* CHIPS */
.chips-section {
  max-width: 1140px;
  margin: 0 auto;
  padding: 14px 40px 0;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  font-family: var(--font-mono);
  font-size: 13px;
}

.chip {
  padding: 8px 16px;
  border-radius: 999px;
  white-space: nowrap;
  cursor: pointer;
  transition: background .15s ease, border-color .15s ease;
  background: transparent;
  color: var(--ink-2);
  border: 1.5px solid var(--hair);
  font-family: var(--font-mono);
  font-size: 13px;
}
.chip.active {
  background: var(--ink);
  color: var(--bg);
  font-weight: 600;
  border-color: var(--ink);
}
.chip:hover:not(.active) {
  border-color: var(--ink-2);
}

/* NOTES GRID */
.notes-section {
  max-width: 1140px;
  margin: 0 auto;
  padding: 26px 40px 60px;
}

.notes-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
}

.note-card {
  text-decoration: none;
  color: inherit;
  background: var(--surface);
  border-radius: 22px;
  border: 1px solid var(--hair);
  box-shadow: 0 8px 24px rgba(19,15,13,.06);
  padding: 24px;
  display: flex;
  flex-direction: column;
  min-height: 210px;
  transition: transform .2s ease, box-shadow .2s ease;
}
.note-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 18px 40px rgba(19,15,13,.13);
}

.note-card-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
}

.pill {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: .1em;
  border-radius: 999px;
  padding: 3px 10px;
  border: 1.5px solid;
}

.note-date {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--ink-3);
}

.note-title {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 22px;
  letter-spacing: -.01em;
  margin: 0 0 8px;
  color: var(--ink);
}

.note-excerpt {
  font-size: 14px;
  line-height: 1.5;
  color: var(--ink-2);
  margin: 0 0 16px;
}

.note-tags {
  margin-top: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
}

.tag-pill {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--ink-2);
  background: var(--hair);
  border-radius: 999px;
  padding: 4px 10px;
  cursor: pointer;
  border: none;
  transition: background .15s ease, color .15s ease;
}
.tag-pill:hover {
  background: rgba(184,65,251,.14);
  color: var(--c-accent-purple);
}

.result-msg {
  text-align: center;
  padding: 34px 0 0;
  font-family: var(--font-mono);
  font-size: 14px;
  color: var(--ink-3);
}

/* EMPTY STATE */
.empty-state {
  text-align: center;
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
}

.empty-msg {
  font-family: var(--font-mono);
  font-size: 15px;
  color: var(--ink-2);
  max-width: 420px;
  line-height: 1.6;
}

.clear-search-btn {
  font-family: var(--font-body);
  font-weight: 700;
  font-size: 14px;
  border-radius: 999px;
  padding: 11px 22px;
  background: var(--ink);
  color: var(--bg);
  border: 0;
  cursor: pointer;
  transition: opacity .15s ease;
}
.clear-search-btn:hover { opacity: .8; }
</style>
