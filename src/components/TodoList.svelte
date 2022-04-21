<script>
  import { todos } from "../stores/todos";

  function toggleCheck(id) {
    const newTodos = [...$todos]
    newTodos.forEach(todo => {
      if (id === todo.id) {
        todo.checked = todo.checked ? false : true
      }
    })
    $todos = newTodos
  }
</script>

<section class="todo-list">
  <ul>
    {#each $todos as todo (todo.id)}
      <li draggable="true">
        <span class="checkbox" class:checked='{todo.checked}' on:click="{toggleCheck(todo.id)}"></span>
        <span class="text" class:checked='{todo.checked}'>{todo.text}</span>
        <svg class="close" xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>
      </li>
    {/each}
  </ul>

  <div class="actions">
    <p>5 Items left</p>
    <button>Clear Completed</button>
  </div>
</section>

<style lang="scss">
  section.todo-list {
    margin: 1em auto;
    width: min(87.2vw, 540px);
    background-color: var(--theme-100);
    border-radius: 0.3125em;
    transition: background-color 400ms linear 0s;
  }

  ul {
    margin: 0px;
    padding: 0px;
    list-style: none;
  }

  li {
    align-items: center;
    background-color: var(--theme-100);
    border-bottom: 1px solid var(--theme-300);
    display: flex;
    font-size: 0.8rem;
    gap: 1em;
    min-height: 3.25em;
    transition-duration: 400ms;
    transition-property: background-color, border-bottom-color;
    transition-timing-function: linear;
    padding: 1.2em 1.875em;
    position: relative;

    &:first-of-type {
      border-top-left-radius: .3125em;
      border-top-right-radius: .3125em;
    }

    &:last-of-type {
      border-bottom-left-radius: .3125em;
      border-bottom-right-radius: .3125em;
    }

    .text {
      display: inline-block;

      color: var(--theme-600);
      transition: color 400ms linear 0s;
      white-space: pre-wrap;
      width: 75%;

      &.checked {
        color: var(--theme-500);
        text-decoration: line-through; 
      }
    }

    .close {
      font-size: var(--fn-100);
      opacity: 0;
      position: absolute;
      right: 1.875em;
      top: calc(1.2em + 3px);
      transform: scale(0.8);
      transition: opacity 250ms ease-in-out 0s;
    }

    &:hover {
      cursor: move;
    }

    &:hover > .close {
      cursor: pointer;
      opacity: 1;
    }
  }

  .actions {
    font-size: var(--fn-100);
    color: var(--theme-500);

    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 4.0625em;
    padding: 0px 1.875em;
    transition: color 400ms linear 0s;

    button {
      border: none;
      background: none;

      font-size: var(--fn-100);
      color: var(--theme-500);
      transition: color 400ms linear 0s;

      &:hover {
        cursor: pointer;
        color: var(--theme-600);
      }
    }
  }
</style>