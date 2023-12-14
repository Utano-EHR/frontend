<script>
	import Form from './utilities/Form.svelte';
	import SubmitInput from './utilities/SubmitInput.svelte';
	import TextInput from './utilities/TextInput.svelte';
	import Link from './utilities/Link.svelte';
	import { goto } from '$app/navigation';
	let id = '';

	async function handleSubmit() {
		goto('/patient/' + id);
	}
</script>

<Form onSubmit={handleSubmit}>
	<TextInput
		type="text"
		placeholder="Enter the patient's Utano ID"
		bind:value={id}
		label="Patient ID"
	/>
	<SubmitInput value="Search" />
	<Link to="patient/new">Create New Patient →</Link>
</Form>

<style>
</style>
