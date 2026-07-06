import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import OpinionsView from './views/OpinionsView.vue'
import NotesView from './views/NotesView.vue'
import ContactView from './views/ContactView.vue'
import PostDetailView from './views/PostDetailView.vue'
import NoteDetailView from './views/NoteDetailView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/opinions', component: OpinionsView },
  { path: '/opinions/:slug', component: PostDetailView },
  { path: '/notes', component: NotesView },
  { path: '/notes/:slug', component: NoteDetailView },
  { path: '/contact', component: ContactView },
]

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})
