<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let selected: Option = { label: '', value: '' };
	export let options: Option[] = [];

	const dispatch = createEventDispatcher();

	function onSelect(option: Option) {
		dispatch('select', option);
	}
</script>

<div>
	<div class="selection">
		{selected.label}
	</div>
	<!--Options-->
	<ul>
		{#each options as option (option.value)}
			<li on:click={() => onSelect(option)}>{option}</li>
		{/each}
	</ul>
</div>
