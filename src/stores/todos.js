import { writable } from "svelte/store";

export const todos = writable([
  { id: 6, text: "Complete online JavaScript course", checked: true },
  { id: 5, text: "Jag around the park 3x", checked: false },
  { id: 4, text: "10 minutes meditation", checked: false },
  { id: 3, text: "Read for 1 hour", checked: false },
  { id: 2, text: "Pick up groceries", checked: false },
  { id: 1, text: "Complete Todo App on Frontend Mentor", checked: false }
])

export const nextId = writable(7)