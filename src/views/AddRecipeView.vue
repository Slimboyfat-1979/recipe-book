<template>
    <div>Add Form</div>
    <form action="" @submit.prevent="addRecipe">
        <div>
            <input type="text" v-model="name" required placeholder="Recipe Name">
        </div>
        <div>
            <textarea name="" id="" v-model="description" placeholder="Recipe Description"></textarea>
        </div>
        <button type="submit">Add</button>
    </form>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import {ref} from 'vue';
import { useRecipeStore } from '@/stores/recipe';

const store = useRecipeStore();

const name = ref('')
const description = ref('')

const router = useRouter();

const addRecipe  = () => {
    const recipe = store.addRecipe({
        name: name.value,
        description: description.value
    });
    router.push({
        name: 'recipe',
        params: {
            id: recipe.id
        }
    })
}


</script>

up to 