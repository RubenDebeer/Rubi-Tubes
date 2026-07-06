<template>
  <NavBar />
  <div v-if="post" class="article-wrap">
    <article>
      <RouterLink to="/opinions" class="back-link">← All opinions</RouterLink>

      <div class="post-meta">
        <span class="pill" :style="pillStyle">{{ post.tags[0] }}</span>
        <span>{{ post.date }}</span>
        <span>·</span>
        <span>{{ post.readTime }}</span>
      </div>

      <h1 class="post-h1">{{ post.title }}</h1>
      <svg viewBox="0 0 420 24" width="420" style="display:block;max-width:100%;margin-bottom:20px" aria-hidden="true">
        <path filter="url(#doodle)" d="M6 14 Q120 3 240 13 T414 11" fill="none" style="stroke:var(--c-accent-purple)" stroke-width="5.5" stroke-linecap="round" stroke-dasharray="560" stroke-dashoffset="560">
          <animate attributeName="stroke-dashoffset" from="560" to="0" dur="1.1s" begin="0.3s" fill="freeze"></animate>
        </path>
      </svg>
      <p class="lede" v-html="post.excerpt"></p>

      <div class="prose" v-html="post.body"></div>

      <div class="article-nav">
        <RouterLink to="/opinions" class="nav-link-btn">← All opinions</RouterLink>
        <RouterLink v-if="nextPost" :to="`/opinions/${nextPost.slug}`" class="nav-link-btn">
          Next: {{ nextPost.title }} →
        </RouterLink>
      </div>
    </article>
  </div>
  <div v-else class="not-found">Post not found.</div>

  <AppFooter />
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import NavBar from '../components/NavBar.vue'
import AppFooter from '../components/AppFooter.vue'
import { opinions, getOpinionIndex } from '../content/index.js'

const route = useRoute()
const post = computed(() => opinions.find(p => p.slug === route.params.slug))

const nextPost = computed(() => {
  const idx = getOpinionIndex(route.params.slug)
  return opinions[idx + 1] || null
})

const tagColors = { purple: 'var(--c-accent-purple)', pink: 'var(--c-accent-pink)', sky: 'var(--c-accent-sky)' }
const pillStyle = computed(() => {
  if (!post.value) return ''
  const c = tagColors[post.value.tagColor] || 'var(--c-accent-purple)'
  return `color:${c};border-color:${c}`
})
</script>

<style scoped>
.article-wrap {
  max-width: 720px;
  margin: 0 auto;
  padding: 32px 20px 56px;
}

@media (min-width: 640px) {
  .article-wrap { padding: 44px 32px 70px; }
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

.post-meta {
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

.post-h1 {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: clamp(38px,6vw,54px);
  line-height: 1.04;
  letter-spacing: -.03em;
  margin: 0 0 8px;
  color: var(--ink);
}

.lede {
  font-size: 21px;
  line-height: 1.55;
  color: var(--ink-2);
  margin: 0 0 34px;
  font-weight: 500;
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
