import { writable } from "svelte/store";

export const todos = writable([
  { id: 1, text: "Complete online JavaScript course", checked: true },
  { id: 2, text: "Jag around the park 3x", checked: false },
  { id: 3, text: "10 minutes meditation", checked: false },
  { id: 4, text: "Read for 1 hour", checked: false },
  { id: 5, text: "Pick up groceries", checked: false },
  { id: 6, text: "Complete Todo App on Frontend Mentor", checked: false }
])

export const nextId = writable(7)