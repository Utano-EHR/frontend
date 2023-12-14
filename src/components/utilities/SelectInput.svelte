<script>
	/**
	 * @type {{ label: string, value: number }[]}
	 */
	export let options = [];
	export let selectedOption = NaN;
	export let id = '';
	export let label = '';
</script>

<div class="select-input">
	<label for={id}>{label}</label>
	<select bind:value={selectedOption}>
		{#each options as { value, label }}
			<option {value}>{label}</option>
		{/each}
	</select>
</div>

<style>
	select {
		padding: 10px 20px;
		border: 1px solid rgb(232, 232, 232);
		border-radius: 5px;
	}

	select:focus {
		outline: 2px solid orange;
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
