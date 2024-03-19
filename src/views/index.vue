<script setup lang="ts">
import List from "@/components/List.vue";
import NewNote from "@/components/NewNote.vue";
import useStore from "@/stores";

const store = useStore();

const newNote = () => {
  store.createNote();
}
</script>

<template>
  <div class="container mx-auto py-20 h-screen">
    <button class="text-indigo-500 mb-3" @click="newNote">Новая заметка</button>
    <div class="flex items-stretch h-2/3">
      <List />
      <NewNote />
    </div>
    <p class="text-center mt-5 text-gray-500">Специально для Ozimiz</p>
  </div>
</template>
