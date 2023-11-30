<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let type = 'text';
	export let placeholder = '';
	export let label = '';
	export let id = '';

	/**
	 * @param {Event} e
	 */
	function onChange(e) {
		// @ts-ignore
		const value = e.target.value;

		dispatch('change', {
			value
		});
	}
</script>

<div>
	<label for={id}>{label}</label>
	<input {id} {type} {placeholder} on:change={onChange} />
</div>

<style>
	input {
		padding: 10px 20px;
		border: 1px solid rgb(232, 232, 232);
		border-radius: 5px;
	}

	div {
		display: flex;
		flex-direction: column;
		gap: 5px;
	}

	label {
		color: rgb(71, 71, 71);
		font-size: 13px;
	}
</style>
