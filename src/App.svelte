<script lang="ts">
	import Header from "./components/Header.svelte";
	import TodoFilter from "./components/TodoFilter.svelte";
	import TodoInput from "./components/TodoInput.svelte";
	import TodoList from "./components/TodoList.svelte";
</script>

<Header/>
<main>
	<TodoInput/>
	<TodoList/>
	<TodoFilter/>
</main>
<footer>Drag and drop to reorder list</footer>

<style lang="scss">
	:global(body) {
		min-height: 100vh;
		background-image: url('../images/bg-mobile-light.jpg');
		background-color:	var(--theme-100); 
		background-repeat: no-repeat;
		background-size: contain;
	}

	:global(html) {
		font-family: "Josefin Sans";
	}

	footer {
		color: var(--theme-400);
		font-size: var(--fn-200);
		margin: 2.95em 0px;
		text-align: center;
	}
</style>