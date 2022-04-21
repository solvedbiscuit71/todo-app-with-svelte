<script>
  let active = 0;
  let filters = [
    'All',
    'Active',
    'Completed'
  ];
  export let currentFilter;

  $: currentFilter = filters[active]
</script>

<section class="todo-filter">
  <ul>
    {#each filters as filter,i (i)}
      <li class:active="{active == i}" on:click="{_ => active = i}">
        {filter}
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
    background-color: var(--theme-100);
    border-radius: 0.3125em;
    min-height: 3em;
    display: flex;
    gap: 1.25em;
    align-items: center;
    justify-content: center;
    list-style: none;
    transition: background-color 400ms linear 0s;
  }

  li {
    color: var(--theme-500);
    transition: color 400ms linear 0s;

    &:hover {
      cursor: pointer;
      color: var(--theme-600);
    }

    &.active {
      color: var(--clr-primary-blue);
    }
  }

  @media (min-width: 720px) {
    section.todo-filter {
      position: absolute;
      bottom: -.25em;
      left: 50%;

      transform: translate(-55%);
      width: fit-content;

      ul {
        background: none;
      }
    }
  }
</style>