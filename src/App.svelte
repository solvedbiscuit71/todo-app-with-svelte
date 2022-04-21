<script lang="ts">
	import Header from "./components/Header.svelte";
	import TodoFilter from "./components/TodoFilter.svelte";
	import TodoInput from "./components/TodoInput.svelte";
	import TodoList from "./components/TodoList.svelte";
	import { theme } from "./stores/theme";

	let currentFilter: 'All' | 'Active' | 'Completed' = 'All';
	let filterFunc: (todo: any) => boolean;
	$: {
		switch (currentFilter) {
			case 'All':
				filterFunc = (todo: any) => true
				break;
			case 'Active':
				filterFunc = (todo: any) => !todo.checked
				break;
			case 'Completed':
				filterFunc = (todo: any) => todo.checked
				break;
		}
	}

	$: {
		if ($theme) {
			const root = document.getElementsByTagName('html')[0]
			for(let i = 100;i <= 600;i += 100) {
				root.style.setProperty(`--theme-${i}`,`var(--${$theme}-${i})`)
			}
		}
	}
</script>

<Header/>
<main>
	<TodoInput/>
	<TodoList {filterFunc}/>
	<TodoFilter bind:currentFilter={currentFilter}/>
</main>
<footer>Drag and drop to reorder list</footer>

<style lang="scss">
	:global(body) {
		min-height: 100vh;
		background-image: url('../images/bg-mobile-light.jpg');
		background-color:	var(--theme-200); 
		background-repeat: no-repeat;
		background-size: contain;
    transition: background-color 400ms linear 0s;
	}

	:global(html) {
		font-family: "Josefin Sans";
	}

	footer {
		color: var(--theme-500);
		font-size: var(--fn-200);
		margin: 2.95em 0px;
		text-align: center;
	}
</style>