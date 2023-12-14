<script>
	import Details from './utilities/Details.svelte';
	import Modal from './utilities/Modal.svelte';
	import Container from './utilities/Container.svelte';
	import Form from './utilities/Form.svelte';
	import TextInput from './utilities/TextInput.svelte';
	import SubmitInput from './utilities/SubmitInput.svelte';

	export let chronicConditions = [];
	export let firstName = '';
	let modalVisible = false;
	function openModal() {
		modalVisible = true;
	}
</script>

<Details
	title="Chronic Conditions"
	primaryAction={{ text: 'Add a chronic condition', action: openModal }}
>
	<ul>
		{#each chronicConditions as chronicCondition}
			<li>{chronicCondition.name}</li>
		{:else}
			<li>{firstName} has no known chronic conditions.</li>
		{/each}
	</ul>
</Details>
<Modal bind:visible={modalVisible}>
	<Container heading="Record New Allergy">
		<Form>
			<TextInput label="Allergy" placeholder="Enter {firstName}'s allergy" />
			<SubmitInput value="Record Consultation" />
		</Form>
	</Container>
</Modal>
