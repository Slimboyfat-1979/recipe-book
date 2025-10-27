import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import FavouritesView from '@/views/FavouritesView.vue';
import AddRecipeView from '@/views/AddRecipeView.vue';
import RecipeView from '@/views/RecipeView.vue';
import NotfoundView from '@/views/NotfoundView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
        path: "/",
        component: HomeView,
        name: 'home',
    },
    {
        path: '/home',
        redirect: '/'
    },
    {
        path: '/favourites',
        component: FavouritesView,
        name: 'favourites'
    },
    {
        path: '/add-recipe',
        component: AddRecipeView,
        name: 'add-recipe'
    },
    {
        path: "/recipe/:id",
        name: 'recipe',
        component: RecipeView,
        alias: '/meal/:id'
    },
    {
        path: '/:pathMatch(.*)',
        name: 'not-found',
        component: NotfoundView
    }
  ],
});

export default router;
