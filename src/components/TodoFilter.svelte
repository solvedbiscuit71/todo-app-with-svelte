<script>
  let currentFilter = 0
  let filters = [
    {
      name: 'All',
      fn: (todo) => true
    },
    {
      name: 'Active',
      fn: (todo) => !todo.checked
    },
    {
      name: 'Completed',
      fn: (todo) => todo.checked
    }
  ]
</script>

<section class="todo-filter">
  <ul>
    {#each filters as filter,index (index)}
      <li class:active="{currentFilter == index}" on:click="{() => {}}">
        {filter.name}
      </li>
    {/each}
  </ul>
</section>

<style lang="scss">
  section.todo-filter {
    width: min(87.2vw, 540px);
    min-height: 3em;
    margin: 0px auto;
    padding: 0px;
  }

  ul {
    background-color: white;
    border-radius: 0.3125em;
    box-shadow: rgba(194, 195, 214, 0.5) 0px 2em 3.125em -1em;
    min-height: 3em;
    display: flex;
    gap: 1.25em;
    align-items: center;
    justify-content: center;
    list-style: none;
  }

  li {
    color: var(--theme-400);
    transition: color 400ms linear 0s;

    &.active {
      color: var(--clr-primary-blue);
    }
  }
</style>