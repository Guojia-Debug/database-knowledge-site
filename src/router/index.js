import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DatabaseListView from '../views/DatabaseListView.vue'
import DatabaseDetailView from '../views/DatabaseDetailView.vue'
import SyntaxView from '../views/SyntaxView.vue'
import TutorialView from '../views/TutorialView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/databases',
      name: 'databases',
      component: DatabaseListView
    },
    {
      path: '/databases/:id',
      name: 'database-detail',
      component: DatabaseDetailView
    },
    {
      path: '/syntax',
      name: 'syntax',
      component: SyntaxView
    },
    {
      path: '/syntax/:id',
      name: 'syntax-detail',
      component: () => import('../views/SyntaxDetailView.vue')
    },
    {
      path: '/tutorials',
      name: 'tutorials',
      component: TutorialView
    },
    {
      path: '/tutorials/:id',
      name: 'tutorial-detail',
      component: () => import('../views/TutorialDetailView.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../views/SearchView.vue')
    }
  ]
})

export default router 