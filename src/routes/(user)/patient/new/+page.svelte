<script>
	import Form from '../../../../components/utilities/Form.svelte';
	import TextInput from '../../../../components/utilities/TextInput.svelte';
	import SelectInput from '../../../../components/utilities/SelectInput.svelte';
	import SubmitInput from '../../../../components/utilities/SubmitInput.svelte';
	import { api } from '../../../../services/api';
	import Container from '../../../../components/utilities/Container.svelte';

	export let data;

	// @ts-ignore
	const insurancePlans = data.insurances.map((insurance) => ({
		label: insurance.name,
		value: insurance.id
	}));

	let firstName = '',
		lastName = '',
		email = '',
		dateOfBirth = '',
		nationalId = '',
		insuranceId = NaN;

	async function handleSubmit() {
		const response = await api.createNewPatient({
			firstname: firstName,
			lastname: lastName,
			email: email,
			date_of_birth: dateOfBirth,
			national_id: nationalId,
			insurance_id: insuranceId
		});

		console.log(response);
	}
</script>

<div class="container">
	<Container heading="Add New Patient">
		<Form onSubmit={handleSubmit}>
			<TextInput
				label="First Name"
				bind:value={firstName}
				placeholder="Enter patient's first name"
			/>
			<TextInput label="Last Name" bind:value={lastName} placeholder="Enter patient's last name" />
			<TextInput label="Email" bind:value={email} placeholder="Enter patient's email" />
			<TextInput
				label="Date of Birth"
				bind:value={dateOfBirth}
				placeholder="Enter patient's date of birth"
				type="date"
			/>
			<TextInput
				label="National ID"
				bind:value={nationalId}
				placeholder="Enter patient's national ID"
			/>
			<SelectInput
				label="Insurance Provider"
				bind:selectedOption={insuranceId}
				options={insurancePlans}
			/>
			<SubmitInput value="Create Patient" />
		</Form>
	</Container>
</div>

<style>
	.container {
		margin: auto;
		max-width: 600px;
	}
</style>
