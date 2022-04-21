<form class="todo-input">
  <span class="checkbox"></span>
  <input type="text" placeholder="Create a new todo...">
</form>

<style lang="scss">
  form {
    width: min(87.2vw, 540px);
    min-height: 3em;
    margin: 1.5em auto 1em;
    padding-left: 1.5em;

    display: flex;
    align-items: center;

    border-radius: 0.3125em;
    background-color: var(--theme-100);
    transition: background-color 400ms linear 0s;
  }

  input {
    background-color: var(--theme-100);
    border: none;
    caret-color: var(--clr-primary-blue);
    color: var(--theme-600);
    width: 75%; 
    min-height: 3em;
    margin-left: calc(2.5em - 22px);

    font-size: var(--fn-100);

    transition-duration: 400ms;
    transition-property: background-color, color;
    transition-timing-function: linear;

    &:hover,&:focus {
      border: none;
      outline: none;
    }
  }
</style>