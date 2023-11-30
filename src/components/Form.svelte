<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	export let heading;

	/**
	 * @param {Event} e
	 */
	function onSubmit(e) {
		e.preventDefault;
		dispatch('submit');
	}
</script>

<form on:submit={onSubmit}>
	<h1>{heading}</h1>
	<slot />
</form>

<style>
	h1 {
		font-size: 1.5rem;
	}
	form {
		display: flex;
		flex-direction: column;
		gap: 20px;
		padding: 20px 0px;
		color: #272727;
	}
</style>
