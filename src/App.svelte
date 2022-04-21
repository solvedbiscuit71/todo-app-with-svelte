<script lang="ts">
	import { onMount } from "svelte";

	import Header from "./components/Header.svelte";
	import TodoFilter from "./components/TodoFilter.svelte";
	import TodoInput from "./components/TodoInput.svelte";
	import TodoList from "./components/TodoList.svelte";
	import { theme } from "./stores/theme";

	let currentFilter: 'All' | 'Active' | 'Completed' = 'All';
	let filterFunc: (todo: any) => boolean;
	let layout: 'mobile' | 'desktop' = 'mobile';

	// media query to find-out the layout
	onMount(() => {
		let media = window.matchMedia('(min-width: 720px)')
		let cb = () => {
			if (media.matches) {
				layout = 'desktop'
			}else {
				layout = 'mobile'
			}
		}
		media.addEventListener('change', cb)

		return () => {
			media.removeEventListener('change', cb)
		}
	})

	// changing the filter function
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

	// changing theme
	$: {
		if ($theme) {
			const html = document.getElementsByTagName('html')[0]
			for(let i = 100;i <= 600;i += 100) {
				html.style.setProperty(`--theme-${i}`,`var(--${$theme}-${i})`)
			}
		}
	}

	$: {
		const body = document.getElementsByTagName('body')[0]
		body.style.backgroundImage = `url('../images/bg-${layout}-${$theme}.jpg')`
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