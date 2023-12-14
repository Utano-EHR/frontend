<script>
	export let visible = false;

	/**
	 * @param {Event} e
	 */
	function closeModal(e) {
		// @ts-ignore
		if (e.target.classList.contains('container')) {
			visible = false;
		}
	}
</script>

<div class="container" style="display: {visible ? 'flex' : 'none'};" on:click={closeModal}>
	<div class="modal">
		<slot />
	</div>
</div>

<style>
	.container {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.7);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.modal {
		width: 500px;
	}
</style>
