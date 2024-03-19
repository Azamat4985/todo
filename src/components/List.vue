<script lang="ts" setup>
import useStore from '@/stores'
import Note from '@/components/Note.vue'

const store = useStore()
</script>

<template>
  <div class="w-1/4 pr-5">
    <div class="p-3 border rounded-md h-full overflow-y-scroll notes">
      <div v-if="!store.notes.length" class="flex items-center justify-center h-full">
        <p class="text-center text-gray-500">Список заметок пуст...</p>
      </div>
      <div v-else>
        <TransitionGroup name="list">
          <Note
            v-for="note in store.notes"
            :key="note.createdAt"
            :note="note"
            @click="store.selectNote(note.createdAt)"
          />
        </TransitionGroup>
      </div>
    </div>
  </div>
</template>

<style scoped>
.notes::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.notes::-webkit-scrollbar-thumb {
  background: #888;
  height: 10px;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}
</style>
