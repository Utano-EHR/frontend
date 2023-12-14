<script>
	import Details from './utilities/Details.svelte';
	import Container from './utilities/Container.svelte';
	import Form from './utilities/Form.svelte';
	import TextInput from './utilities/TextInput.svelte';
	import SubmitInput from './utilities/SubmitInput.svelte';
	import Table from './utilities/Table.svelte';
	import Modal from './utilities/Modal.svelte';
	import { api } from '../services/api';

	import { formatDate } from '$lib/formatDate';

	/**
	 * @type {any[]}
	 */
	export let appointments = [];

	/**
	 * @type {string[][]}
	 */
	let formattedAppointments = [];

	$: formattedAppointments = appointments.map(({ date, doctor: { firstname, lastname } }) => [
		formatDate(date),
		'Dr ' + firstname + ' ' + lastname
	]);

	export let firstName = '';
	export let doctorId = 0;
	export let patientId = 0;

	let date = '';
	let modalVisible = false;

	function openModal() {
		modalVisible = true;
	}

	async function handleSubmit() {
		if (date === '') {
			alert('Please enter a date');
			return;
		}

		const response = await api.createAppointment({
			date,
			doctor_id: doctorId,
			patient_id: patientId
		});

		appointments = [...appointments, response.appointment];
		alert('Appointment scheduled successfully');
		modalVisible = false;
	}
</script>

<Details
	title="Appointments"
	primaryAction={{ text: 'Schedule an appointment', action: openModal }}
>
	{#if appointments.length === 0}
		<p>{firstName} has no upcoming appointments.</p>
	{:else}
		<Table headings={['Date', 'Doctor']} rows={formattedAppointments}></Table>
	{/if}
</Details>
<Modal bind:visible={modalVisible}>
	<Container heading="New Appointment">
		<Form onSubmit={handleSubmit}>
			<TextInput
				bind:value={date}
				type="date"
				label="Date"
				placeholder="Enter date for your appointment"
			/>
			<SubmitInput value="Create Appointment" />
		</Form>
	</Container>
</Modal>
