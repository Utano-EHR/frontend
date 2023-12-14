<script>
	import Details from './utilities/Details.svelte';
	import Modal from './utilities/Modal.svelte';
	import Form from './utilities/Form.svelte';
	import SubmitInput from './utilities/SubmitInput.svelte';
	import TextInput from './utilities/TextInput.svelte';
	import Container from './utilities/Container.svelte';
	import Table from './utilities/Table.svelte';
	import { api } from '../services/api';
	/**
	 * @type {any[]}
	 */
	export let consultations = [];

	export let doctorId = 0;
	export let patientId = 0;
	export let hospitalId = 0;

	let observations = '';

	/**
	 * @type {any[][]}
	 */
	let formattedConsulations = [];

	$: formattedConsulations = consultations.map(
		({ created_at, doctor_id, hospital_id, observations }) => [
			created_at,
			doctor_id,
			hospital_id,
			observations
		]
	);

	let modalVisible = false;

	function openModal() {
		modalVisible = true;
	}

	async function handleSubmit() {
		if (observations === '') {
			alert('Please enter observations');
			return;
		}

		const response = await api.createConsultation({
			doctor_id: doctorId,
			hospital_id: hospitalId,
			patient_id: patientId,
			observations: observations
		});
		if (response.status === 201) {
			alert('Consultation recorded successfully');
			modalVisible = false;
			consultations = [...consultations, response.data];
		} else {
			alert('Something went wrong');
		}
	}
</script>

<Details
	title="Consultations"
	primaryAction={{ text: 'Record New Consulation', action: openModal }}
>
	<Table headings={['Date', 'Doctor', 'Hospital', 'Observations']} rows={formattedConsulations}
	></Table>
</Details>
<Modal bind:visible={modalVisible}>
	<Container heading="Record New Consultation">
		<Form onSubmit={handleSubmit}>
			<label for="Observations"></label>
			<textarea bind:value={observations} placeholder="Record Observations" />
			<SubmitInput value="Record Consultation" />
		</Form>
	</Container>
</Modal>

<style>
	textarea {
		resize: none;
		padding: 10px;
		height: 150px;
		border: 1px solid #ccc;
		border-radius: 5px;
		outline: none;
	}

	textarea:focus {
		outline: 1px solid orange;
	}
</style>
