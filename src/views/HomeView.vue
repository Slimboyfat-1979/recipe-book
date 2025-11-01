<template>
  <main>
    <h1>Recipe Book</h1>
    <div>
        <input type="text" placeholder="Search Recipes" v-model="searchQuery">
    </div>
    <nav v-if="filteredRecipes.length > 0">
        <ul>
            <li v-for="recipe in filteredRecipes" :key="recipe.id">
                <RouterLink :to="{name: 'recipe', params: {id: recipe.id}}">{{ recipe.name }}</RouterLink>
            </li>
        </ul>
    </nav>
    <div v-else>
        No recipes found!
    </div>
  </main>

</template>

<script setup lang="ts">
import {computed, ref} from 'vue';
import { RouterLink } from 'vue-router';
import { useRecipeStore } from '@/stores/recipe';

const searchQuery = ref('');
const recipeStore = useRecipeStore();

const filteredRecipes = computed(() => {
    return recipeStore.recipes.filter(recipe => recipe.name.toLowerCase().includes(searchQuery.value.toLowerCase()))
})

</script>
