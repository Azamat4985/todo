<script lang="ts" setup>
import type { INote } from '@/types/note'
import useStore from '@/stores'
import { computed } from 'vue'

interface IProps {
  note: INote
}

const props = defineProps<IProps>()
const store = useStore()

const deleteHandler = () => {
  store.deleteNote(props.note.createdAt)
}

const description = computed(() => {
  return props.note.description.length < 15
    ? props.note.description
    : props.note.description.slice(0, 15) + '...'
})
</script>

<template>
  <div class="border rounded-md p-3 cursor-pointer mb-3 flex justify-between items-center note">
    <div>
      <p class="text-[12px] text-gray-500">
        {{ new Date(props.note.createdAt).toLocaleDateString('ru') }}
      </p>
      <p>{{ props.note.title ? props.note.title : 'Без заголовка' }}</p>
      <p class="text-gray-500">{{ description }}</p>
    </div>
    <div
      class="dark:hover:bg-gray-100 w-[30px] h-[30px] rounded-full relative icon"
      @click="deleteHandler"
    >
      <v-icon
        class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
        color="red"
        name="io-trash-bin"
        scale="0.8"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.icon {
  opacity: 0;
}

.note:hover {
  .icon {
    opacity: 1;
  }
}
</style>
