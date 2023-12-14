<script>
	export let title = '';
	export let primaryAction = {
		text: '',
		action: () => {}
	};
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
	<div class="button-row">
		<button on:click={primaryAction.action}>{primaryAction.text}</button>
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
		font-weight: bold;
	}

	details {
		background-color: #ffffff;
		border-radius: 10px;
		padding: 20px 30px;
	}

	button {
		padding: 10px 20px;
		border-radius: 5px;
		background-color: #272727;
		color: white;
		border: none;
	}

	.button-row {
		display: flex;
		justify-content: end;
	}
</style>
