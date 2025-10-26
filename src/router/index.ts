import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import FavouritesView from '@/views/FavouritesView.vue';
import AddRecipeView from '@/views/AddRecipeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
        path: "/",
        component: HomeView,
        name: 'home'
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
    }
  ],
});

export default router;
