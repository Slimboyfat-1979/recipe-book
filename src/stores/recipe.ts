import { defineStore } from "pinia";
import {ref} from 'vue';

interface Recipe {
    id: string,
    name: string,
    description: string
}

export const useRecipeStore = defineStore('recipe', () => {
    const recipes = ref<Recipe[]>([]);

    const addRecipe = (recipe: Recipe) => {
        recipes.value.push(recipe)
    }

    return {recipes, addRecipe}
})

// 1:44 video 100