<template>
    <div>
      <div>
        <h1>
            {{ recipe?.name }}
        </h1>
        <p>
            {{ recipe?.description }}
        </p>
      </div>
    </div>

</template>

<script setup lang="ts">
import { useRecipeStore } from '@/stores/recipe';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const recipeStore = useRecipeStore();

const recipe = computed(() => recipeStore.getRecipeById(route.params.id as string)) 

</script>





     <!-- <nav>
        <ul>
            <li>
                <RouterLink :to="{name: 'recipe', params: {id: 1} }">Recipe 1</RouterLink>
            </li>
            <li>
                <RouterLink :to="{name: 'recipe', params: {id: 3} }">Recipe 3</RouterLink>
            </li>
        </ul>
     </nav> -->