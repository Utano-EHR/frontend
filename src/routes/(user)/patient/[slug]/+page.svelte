<script>
	import { onMount } from 'svelte';
	import Appointments from '../../../../components/Appointments.svelte';
	import PatientInformation from '../../../../components/PatientInformation.svelte';
	import GeneralInformation from '../../../../components/GeneralInformation.svelte';
	import Allergies from '../../../../components/Allergies.svelte';
	import ChronicConditions from '../../../../components/ChronicConditions.svelte';
	import Consultations from '../../../../components/Consultations.svelte';

	let doctorId = 0;
	let hospitalId = 0;

	onMount(async () => {
		doctorId = Number(window.localStorage.getItem('userId')) || 0;
		hospitalId = Number(window.localStorage.getItem('hospitalId')) || 0;
	});

	export let data;
	const {
		patient: {
			id,
			firstname,
			lastname,
			email,
			date_of_birth,
			national_id,
			allergies,
			insurance,
			appointments,
			chronic_conditions,
			consultations
		}
	} = data;

	console.log(appointments);
</script>

<div class="content">
	<PatientInformation firstName={firstname} lastName={lastname} dateOfBirth={date_of_birth} />
	<GeneralInformation
		firstName={firstname}
		lastName={lastname}
		{email}
		nationalId={national_id}
		insuranceName={insurance.name}
		dateOfBirth={date_of_birth}
		{allergies}
		chronicConditions={chronic_conditions}
	/>
	<Appointments {appointments} firstName={firstname} {doctorId} patientId={id}></Appointments>
	<Consultations {consultations} patientId={id} {doctorId} {hospitalId} />
</div>

<div class="sections"></div>

<style>
	.content {
		width: 800px;
		margin: auto;
		display: flex;
		flex-direction: column;
		gap: 15px;
	}
</style>
