<script>
	import Nav from '../components/nav/Nav.svelte';

	export let segment;
</script>

<style>
	:global(:root) {
		--main-text-color: #5b73a0;
		--main-link-color: #3365ff;
		--menu-color: #fff;
		--main-bg-color: #f8f9ff;
	}
	

	.wrapper {
		min-height: 100vh;
		max-width: 100%;
		overflow: hidden;
		font-size: 14px;
		font-family: 'Open Sans', sans-serif;

		background: var(--main-bg-color);

		display: flex;
	}

	main {
		padding: 40px 30px;
		width: 100%;
	}

</style>

<div class="wrapper">
	<Nav {segment}/>

	<main>
		<slot></slot>
	</main>
</div>