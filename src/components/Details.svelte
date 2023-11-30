<script>
	export let title = '';
	let open = false;

	function toggleOpen() {
		open = !open;
	}

	/**
	 * @param {{ preventDefault: () => void; }} e
	 */
	function doNothing(e) {
		e.preventDefault();
	}
</script>

<details {open}>
	<summary on:click={doNothing}>
		{title}
		<button class="expand" on:click={toggleOpen}>{open ? 'Close' : 'Expand'}</button>
	</summary>
	<div class="content">
		<slot />
	</div>
</details>

<style>
	.content {
		padding: 20px 0px;
	}

	.expand {
		color: rgb(0, 149, 255);
		cursor: pointer;
		background-color: inherit;
		border: none;
	}

	summary {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	details {
		background-color: #d9d9d9;
		border-radius: 10px;
		padding: 20px 30px;
	}
</style>
