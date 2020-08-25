<script>
	export let segment;
</script>

<style>
	nav {
		background: #fff;
		min-width: auto;
		padding: 40px 45px;
		max-width: 320px;
		box-shadow: 0px 0px 15px 0px rgba(0,0,0, .2);
	}

	a {
		color: var(--main-text-color);
	}
	a.selected {
		color: red;
	}

	.logo {
		font-size: 24px;
		font-weight: bold;
		margin-bottom: 30px;
	}

</style>

<nav>

	<ul>
		<li class="logo">FitnessStat</li>
		<li>
			<a class:selected="{segment === undefined}" href=".">
				<span>Основные данные</span>
			</a>
		</li>
		<li>
			<a rel=prefetch class:selected="{segment === 'exercises'}" href="exercises">
				Упражнения
			</a>
		</li>
		<li>
			<a class:selected="{segment === 'stat'}" href="stat">
				Статистика
			</a>
		</li>
	</ul>
</nav>
