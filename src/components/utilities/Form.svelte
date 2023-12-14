<script>
	export let onSubmit = () => {};

	/**
	 * @param {Event } e
	 */
	function handleSubmit(e) {
		e.preventDefault();
		onSubmit();
	}
</script>

<form on:submit={handleSubmit}>
	<slot />
</form>

<style>
	form {
		display: flex;
		flex-direction: column;
		gap: 20px;
		color: #272727;
	}
</style>
