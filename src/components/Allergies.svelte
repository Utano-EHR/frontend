<script>
	import Details from './utilities/Details.svelte';
	import Modal from './utilities/Modal.svelte';
	import Container from './utilities/Container.svelte';
	import Form from './utilities/Form.svelte';
	import TextInput from './utilities/TextInput.svelte';
	import SubmitInput from './utilities/SubmitInput.svelte';

	export let allergies = [];
	export let firstName = '';

	let modalVisible = false;

	function openModal() {
		modalVisible = true;
	}
</script>

<Details title="Allergies" primaryAction={{ text: 'Record New Allergy', action: openModal }}>
	<ul>
		{#each allergies as allergy}
			<li>{allergy.name}</li>
		{:else}
			<li>{firstName} has no known allergies.</li>
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
