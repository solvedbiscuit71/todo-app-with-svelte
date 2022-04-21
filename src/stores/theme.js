import { writable } from "svelte/store"

export const theme = writable('',() => {
  if (localStorage.getItem('theme') !== null) {
    theme.set(localStorage.getItem('theme'))
    return;
  }
  theme.set('light')
})