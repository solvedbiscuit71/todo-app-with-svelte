<script lang="ts">
	import Header from "./components/Header.svelte";

	let theme: 'light'|'dark' = 'light';
</script>

<Header {theme}/>
<main>
	<form class="todo-input">
		<span class="checkbox"></span>
		<input type="text" placeholder="Create a new todo...">
	</form>

	<section class="todo-list">
		<ul>
			<li>
				<span class="checkbox"></span>
				<span>Complete online JavaScript course</span>
			</li>
			<li>
				<span class="checkbox"></span>
				<span>Complete online JavaScript course</span>
			</li>
			<li>
				<span class="checkbox"></span>
				<span>Complete online JavaScript course</span>
			</li>
			<li>
				<span class="checkbox"></span>
				<span>Complete online JavaScript course</span>
			</li>
			<li>
				<span class="checkbox"></span>
				<span>Complete online JavaScript course</span>
			</li>
			<li>
				<span class="checkbox"></span>
				<span>Complete online JavaScript course</span>
			</li>
		</ul>

		<div class="actions">
			<p>5 Items left</p>
			<button>Clear Completed</button>
		</div>
	</section>

	<section class="todo-filter">
		<ul>
			<li>All</li>
			<li>Active</li>
			<li>Completed</li>
		</ul>
	</section>
</main>
<footer>
	Drag and drop to reorder list
</footer>

<style lang="scss">
	:global(body) {
		min-height: 100vh;
		background-image: url('../images/bg-mobile-light.jpg');
		background-repeat: no-repeat;
		background-size: contain;
	}
</style>