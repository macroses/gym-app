<script>
	export let checkResult = false;
</script>

<label>
	<input type=checkbox bind:checked={checkResult}>
	<slot></slot>
</label>