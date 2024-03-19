import {defineStore} from "pinia";
import {useStorage} from "@vueuse/core";
import type {INote} from "@/types/note";
import {ref} from "vue";

const useStore = defineStore("store", () => {
  const notes = useStorage<INote[]>("notes", [] as INote[]);
  const currentNote = ref<INote>();

  const createNote = () => {
    const note: INote = {
      title: "Новая заметка",
      description: "",
      createdAt: Date.now(),
    }
    notes.value.push(note)
    currentNote.value = note;
  }

  const selectNote = (createdAt: number) => {
    currentNote.value = notes.value.find((n: INote) => n.createdAt === createdAt);
  }

  const editTitle = (value: string) => {
    if (typeof currentNote.value !== "undefined") {
      currentNote.value.title = value;
    }
  }

  const editDescription = (value: string) => {
    if (typeof currentNote.value !== "undefined") {
      currentNote.value.description = value;
    }
  }

  const deleteNote = (createdAt: number) => {
    notes.value = notes.value.filter((n) => n.createdAt !== createdAt)
  }

  return {
    notes,
    currentNote,
    createNote,
    selectNote,
    editTitle,
    editDescription,
    deleteNote
  }
});

export default useStore;
