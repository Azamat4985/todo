<script lang="ts" setup>
import useStore from '@/stores'
import {ref} from "vue";

const store = useStore();

const editTitle = (event: any) => {
  store.editTitle(event.target.value)
}

const editDescription = (event: any) => {
  store.editDescription(event.target.value)
}
</script>

<template>
  <div v-if="store.currentNote" class="w-3/4 h-full border rounded-md p-3">
    <input
      :value="store.currentNote.title"
      class="text-3xl w-full focus-visible:outline-none focus-visible:border-b p-3"
      placeholder="Новая заметка"
      @input="editTitle($event)"
    />
    <textarea
      :value="store.currentNote.description"
      class="resize-none w-full p-3 h-full focus-visible:outline-none"
      placeholder="Ваша заметка..."
      @input="editDescription($event)"
    />
  </div>
</template>

<style scoped></style>
